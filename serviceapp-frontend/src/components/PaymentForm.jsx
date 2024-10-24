import React, { useState } from 'react';

const PaymentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault();

        const options = {
            key: "rzp_test_2CPPY5AfDjki0x", // Replace with your Razorpay key
            amount: "59900",
            currency: "INR",
            name: "WorkarConnect",
            description: "Test Transaction",
            handler: function(response) {
                console.log(response);
                alert("Payment Successful!");
                setPaymentSuccess(true);
            },
            prefill: {
                name: name,
                email: email,
                contact: contact,
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!paymentSuccess) {
            alert("Please complete the payment before submitting the form.");
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            alert("No authorization token found. Please log in.");
            return;
        }

        const paymentData = {
            name,
            email,
            contact,
            address,
            pincode,
        };

        fetch('http://workarconnect-nx8y-buuvhf4ed-purushottamsalians-projects.vercel.app/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(paymentData),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert(data.message);
            // Reset form
            setName('');
            setEmail('');
            setContact('');
            setAddress('');
            setPincode('');
            setPaymentSuccess(false);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error saving payment information. Please try again.');
        });
    };

    return (
        <form id="paymentInfoForm" onSubmit={handleSubmit}>
            <h2>Payment Form</h2>

            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
            />

            <p><label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            /></p>

            <p><label htmlFor="contact">Contact:</label>
            <input
                type="tel"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter your contact number"
                required
            />
</p>
            <p><label htmlFor="address">Address:</label>
            <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                required
            />
            </p>

            <p>
            <label htmlFor="pincode">Pincode:</label>
            <input
                type="text"
                id="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter your pincode"
                required
            />    
            </p>

            <button type="button" id="payNow" onClick={handlePayment}>Pay Now</button>
            <button type="submit" id="submitBtn" disabled={!paymentSuccess} onClick={handleSubmit}>Submit Form</button>
        </form>
    );
};

export default PaymentForm;