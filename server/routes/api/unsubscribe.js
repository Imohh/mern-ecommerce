const express = require('express');
const router = express.Router();

// Bring in Models & Helpers
const Unsubscribe = require('../../models/unsubscribe');

router.post('/unsubscribe', async (req, res) => {
  try {
    const email = req.body.email;

    if (!email) {
      return res.status(400).json({ error: 'You must enter an email address.' });
    }

    const unsubscribe = new Unsubscribe({
      email
    });

    const unsubscribeDoc = await unsubscribe.save();
    res.status(200).json({
      success: true,
      message: `We receved your email, we will reach you on your email address ${email}!`,
      unsubscribe: unsubscribeDoc
    });

  } catch (error) {
    return res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

module.exports = router;