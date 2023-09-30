const express = require('express');
const router = express.Router();

const mailchimp = require('../../services/mailchimp');
const mailgun = require('../../services/mailgun');
// const { sendWelcomeEmail } = require('../../services/email')

const Newsletter = require('../../models/Newsletter');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// function generateCouponCode() {
//   const timestamp = Date.now(); // Get the current timestamp in milliseconds
//   const randomString = Math.random().toString(36).substring(2, 8); // Generate a random alphanumeric string
//   const couponCode = randomString; // Combine timestamp and random string
//   return couponCode;
// }

function generateCouponCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let couponCode = '';
  const codeLength = 6; // You can adjust the length of the coupon code here

  for (let i = 0; i < codeLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    couponCode += characters[randomIndex];
  }

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

    

    // Coupon expiry date - 2 days
    // const twoDaysInSeconds = 2 * 24 * 60 * 60; // 2 days in seconds
    // const couponExpirationTimestamp = Math.floor(Date.now() / 1000) + twoDaysInSeconds;

    // const fifteenMinutesInSeconds = 15 * 60; // 15 minutes in seconds
    // const couponExpirationTimestamp = Math.floor(Date.now() / 1000) + fifteenMinutesInSeconds;

    const couponExpirationTimestamp = new Date(Date.now() + 10 * 60 * 1000)
    
    const formEntry = new Newsletter({
      email,
      couponId: couponCode,
      // redeem_by: couponExpirationTimestamp,
    });

    const coupon = await stripe.coupons.create({
      percent_off: 10,
      duration: 'once',
      id: couponCode,
      // redeem_by: couponExpirationTimestamp,
    })

    // Create a Stripe customer
    const customer = await stripe.customers.create({
      email: email,
      description: 'Newsletter Subscriber',
      coupon: coupon.id,
    });

    const promotionCode = await stripe.promotionCodes.create({
      coupon: couponCode,
      code: couponCode,
      // customer: customer.id,
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