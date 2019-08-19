const path = require('path');
const express = require('express');
const stripe = require('stripe');
const compression = require('compression');
const enforce = require('express-sslify');

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

const stripeApi = stripe(process.env.STRIPE_SECRET_KEY);

app.post('/payment', async (req, res) => {
  try {
    const data = await stripeApi.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'usd',
    });
    res.send({ data });
  } catch (error) {
    res.send({ error });
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});
