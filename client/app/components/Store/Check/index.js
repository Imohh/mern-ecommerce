import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { PaystackButton } from 'react-paystack'


const Check = props => {
	const { cartTotal } = props;
	const publicKey = "pk_test_7114661f512e87772aefeab61d6811334b084c85";
	const amount = 10000; // Remember, set in kobo!
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");



	// const config = {
	//     reference: (new Date()).getTime().toString(),
	//     email: "user@example.com",
	//     amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
	//     publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
	// };

	const handlePaystackSuccessAction = (reference) => {
    	alert("Thanks for doing business with us! Come back soon!!");
		<Redirect to='/' />
    	// Implementation for whatever you want to do with reference and after success call.
    	console.log(reference);
    };

    const handlePaystackCloseAction = () => {
    	alert("Wait! Don't leave ")
    	// implementation for  whatever you want to do when the Paystack dialog closed.
    	console.log('closed')
    }

    const componentProps = {
		reference: (new Date()).getTime().toString(),
	    email,
	    amount,
	    metadata: {
	      name,
	      phone,
	    },
	    publicKey,
	    text: "Pay Now",
	    onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
	    // onSuccess: () =>
	    //   alert("Thanks for doing business with us! Come back soon!!"),
	    // onClose: () => alert("Wait! Don't leave :("),
	}

    // const componentProps = {
    //     ...config,
    //     text: 'Paystack Button Implementation',
    //     onSuccess: (reference) => handlePaystackSuccessAction(reference),
    //     onClose: handlePaystackCloseAction,
    // };

	return (
		<>
			<div className="checkout-form" style={{marginTop: "10%"}}>
			  <div className="checkout-field">
			    <label>Name</label>
			    <input
			      type="text"
			      id="name"
			      onChange={(e) => setName(e.target.value)}
			    />
			  </div>
			  <div className="checkout-field">
			    <label>Email</label>
			    <input
			      type="text"
			      id="email"
			      onChange={(e) => setEmail(e.target.value)}
			    />
			  </div>
			  <div className="checkout-field">
			    <label>Phone</label>
			    <input
			      type="text"
			      id="phone"
			      onChange={(e) => setPhone(e.target.value)}
			    />
			  </div>
			  <PaystackButton className="paystack-button" {...componentProps} />
			</div>
		</>
	)
}

export default Check