const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const { port } = keys;




router.post("/checkout", async (req, res) => {

	console.log(req.body);
	const items = req.body.items;
	let lineitems = [];
	items.forEach((item) => {
		lineItems.push(
			{
				price: item.id,
				quantity: item.quantity
			}
		)
	});

	const session = await stripe.checkout.sessions.create({
		line_items: lineItems,
		mode: 'payment',
		success_url: "http://localhost:8080/success",
		cancel_url: "http://localhost:8080/cancel",
	})

	res.send(JSON.stringify({
		url: session.url
	}))

});


module.exports = router;