// const express = require('express');
// const router = express.Router();
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
// const { port } = keys;




// router.post("/checkout", async (req, res) => {

// 	console.log(req.body);
// 	const items = req.body.items;
// 	let lineitems = [];
// 	items.forEach((item) => {
// 		lineItems.push(
// 			{
// 				price: item.id,
// 				quantity: item.quantity
// 			}
// 		)
// 	});

// 	const session = await stripe.checkout.sessions.create({
// 		line_items: lineItems,
// 		mode: 'payment',
// 		success_url: "http://localhost:8080/success",
// 		cancel_url: "http://localhost:8080/cancel",
// 	})

// 	res.send(JSON.stringify({
// 		url: session.url
// 	}))

// });


// const router = require("express").Router()
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// router.post("/payment", (req,res)=> {
//     stripe.charges.create({
//         source: req.body.tokenId, // tokenId will come from Stripe when a payment was initiated
//         amount: req.body.amount,
//         currency: "gbp",
//     }, (stripeErr, stripeRes)=> {
//         if(stripeErr){
//             res.status(500).json(stripeErr)
//         }else{
//             res.status(200).json(stripeRes)
//         }
//     })
// })


const express = require('express');
const router = express.Router();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/payment', (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        }, 
        (stripeErr, stripeRes) => {
            if(stripeErr) {
                res.status(500).json(stripeErr)
            } else {
                res.status(200).json(stripeRes)
            }
        }
    );
});

module.exports = router;