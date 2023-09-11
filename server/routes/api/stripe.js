const express = require('express');
const router = express.Router();
const Payment = require('../../models/payment');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/create-checkout-session', async (req, res) => {
    try {

    const { cartTotal, productNames } = req.body;

    const combineProductNames = productNames.join(', ');

    // Create a new payment document
    const paymentDescription = 'Payment for: ' + combineProductNames;
    const unitAmount = cartTotal * 100


    const newPayment = new Payment({
      // user: userId, // Include the user ID
      // order: orderId, // Include the order ID
      // paymentId,
      paymentDescription,
      unit_amount: unitAmount,
      // Add other payment-related fields here
    });

    await newPayment.save();

    const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
                currency: "gbp",
                product_data: {
                    name: combineProductNames,
                },
                unit_amount: cartTotal * 100,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:8080/success',
        cancel_url: 'http://localhost:8080/contact',
        payment_intent_data: {
            description: paymentDescription,
        }
      });

    res.json({url: session.url});
    
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occured' })
    }
});

module.exports = router;