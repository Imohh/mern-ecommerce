const express = require('express');
const router = express.Router();

// Bring in Models & Helpers
const Unsubscribe = require('../../models/unsubscribe');

router.post('/unsubscribe', auth, async (req, res) => {
  try {
    const email = req.body.email;
    const formEntry = new Unsubscribe({
      email,
    });

    if (!email) {
      return res.status(400).json({ error: 'You must enter an email address.' });
    }

    await formEntry.save();
    res.status(200).json({ message: 'Form data saved successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;