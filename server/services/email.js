// email.js

const nodemailer = require('nodemailer');

function sendWelcomeEmail(userEmail) {
  return new Promise((resolve, reject) => {
    // Create a Nodemailer transporter with your email service provider settings
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., 'Gmail', 'Outlook', etc.
      auth: {
        user: 'your@email.com',
        pass: 'your-password',
      },
    });

    // Email content
    const mailOptions = {
      from: 'Imoh Precious <your@email.com>',
      to: userEmail,
      subject: 'Welcome to Eminence Luxury store!',
      text: 'Thank you for signing up to Eminence Luxury store!',
      // You can also use HTML for a more styled email:
      // html: '<h1>Welcome to Your Ecommerce App!</h1><p>Thank you for signing up!</p>',
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        reject(error);
      } else {
        console.log('Email sent:', info.response);
        resolve();
      }
    });
  });
}

module.exports = { sendWelcomeEmail };
