const express = require('express');
const router = express.Router();

const mailchimp = require('../../services/mailchimp');
const mailgun = require('../../services/mailgun');
const { sendWelcomeEmail } = require('../../services/email')

const Newsletter = require('../../models/Newsletter');

router.post('/subscribe', async (req, res) => {
  try {
    const email = req.body.email;
    const formEntry = new Newsletter({
      email,
    });

    if (!email) {
      return res.status(400).json({ error: 'You must enter an email address.' });
    }

    await formEntry.save();

    // Send a welcome email to the use after saving the subscription
    await sendWelcomeEmail(email)

    res.status(200).json({ message: 'Form data saved successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
  
});

module.exports = router;