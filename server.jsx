require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

app.use(express.json());

// Use CORS middleware to allow cross-origin requests
app.use(cors());

app.use(express.static('client/dist'));

app.post('/payment', (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'usd'
    };
  
    stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.error('Stripe Error:', stripeErr);
        res.status(500).send({ error: stripeErr });
      } else {
        console.log('Stripe Response:', stripeRes);
        res.status(200).send({ success: stripeRes });
      }
    });
});


app.listen(5000, function () {
  console.log("Server running on http://localhost:5000");
});
