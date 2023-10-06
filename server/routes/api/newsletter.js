const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const mailchimp = require('../../services/mailchimp');
const mailgun = require('../../services/mailgun');
// const { sendWelcomeEmail } = require('../../services/email')

const Newsletter = require('../../models/Newsletter');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


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

    const couponExpirationTimestamp = new Date(Date.now() + 10 * 60 * 1000)
    
    const formEntry = new Newsletter({
      email,
      couponId: couponCode,
      used: false
    });

    const coupon = await stripe.coupons.create({
      percent_off: 10,
      duration: 'once',
      id: couponCode,
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
    const transporter = nodemailer.createTransport({
      host: 'smtppro.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@eminencebygtx.com',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: '"Eminence Newsletter" info@eminencebygtx.com',
      to: email,
      subject: 'Welcome to Our Newsletter!',
      text: 'Thank you for subscribing to our newsletter. Here is your special coupon code: ' + couponCode,
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if(error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    });

    res.status(200).json({ message: 'Form data saved successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }

});

module.exports = router;