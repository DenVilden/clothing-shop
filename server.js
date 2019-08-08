const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const stripe = require('stripe');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile('build/index.html');
  });
} else {
  dotenv.config();
}

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe(process.env.STRIPE_SECRET_KEY).charges.create(
    body,
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).send({ error: stripeErr });
      } else {
        res.status(200).send({ success: stripeRes });
      }
    }
  );
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});
