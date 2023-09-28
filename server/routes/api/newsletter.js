const express = require('express');
const router = express.Router();

const mailchimp = require('../../services/mailchimp');
const mailgun = require('../../services/mailgun');
// const { sendWelcomeEmail } = require('../../services/email')

const Newsletter = require('../../models/Newsletter');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');

function generateCouponCode() {
  const timestamp = Date.now(); // Get the current timestamp in milliseconds
  const randomString = Math.random().toString(36).substring(2, 8); // Generate a random alphanumeric string
  const couponCode = randomString; // Combine timestamp and random string
  return couponCode;
}

router.post('/subscribe', async (req, res) => {
  try {
    const email = req.body.email;


    if (!email) {
      return res.status(400).json({ error: 'You must enter an email address.' });
    }

    const existingSubscriber = await Newsletter.findOne({ email });

    if (existingSubscriber) {
      return res.status(400).json({ error: 'This email is already subscribed.' });
    }


    const couponCode = generateCouponCode()
    console.log('Generated coupon code:', couponCode)

    const formEntry = new Newsletter({
      email,
      couponId: couponCode
    });
    
    // Create a Stripe customer
    const customer = await stripe.customers.create({
      email: email,
      description: 'Newsletter Subscriber',
    });

    const coupon = await stripe.coupons.create({
      percent_off: 10,
      duration: 'once',
      id: couponCode,
    })

    const promotionCode = await stripe.promotionCodes.create({
      coupon: couponCode,
      code: 'ALICE20',
      customer: customer.id,
    });
    
    await formEntry.save();

    // Send a welcome email to the use after saving the subscription
    // await sendWelcomeEmail(email)

    res.status(200).json({ message: 'Form data saved successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
  
});

module.exports = router;