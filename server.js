import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import stripe from 'stripe';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
} else {
  dotenv.config();
}

const stripeApi = stripe(process.env.STRIPE_SECRET_KEY);

app.post('/payment', async (req, res) => {
  try {
    const data = await stripeApi.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'usd'
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
