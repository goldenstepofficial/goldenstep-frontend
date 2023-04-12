import React, { useEffect } from 'react';
import Head from 'next/head';

const CheckoutPage = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://sdk.cashfree.com/js/ui/2.0.0/cashfree.sandbox.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const paymentSessionId = localStorage.getItem('sessionId');
            const cashfree = new Cashfree(paymentSessionId);

            function redirectToCheckout() {
                cashfree.redirect();
            }

            const checkoutButton = document.getElementById('checkout-btn');
            checkoutButton.addEventListener('click', redirectToCheckout);
        };
    }, []);

    return (
        <div>
            <Head>
                <title>My Next.js Website</title>
            </Head>

            <main>
                <button id="checkout-btn">Checkout</button>
            </main>
        </div>
    );
};

export default CheckoutPage;
