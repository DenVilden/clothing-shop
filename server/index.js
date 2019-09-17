const path = require('path');
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const compression = require('compression');
const enforce = require('express-sslify');

const app = express();
const port = process.env.PORT || 5000;

const buildPath = path.join(__dirname, '../build');

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(buildPath));
  app.get('*', (req, res) => {
    res.sendFile(`${buildPath}/index.html`);
  });
}

app.post('/payment', async (req, res) => {
  try {
    const data = await stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'usd',
    });
    res.send({ data });
  } catch (error) {
    res.status(400).send();
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});