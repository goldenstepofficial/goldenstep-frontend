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
            <main className='flex justify-center h-screen'>
                <button className="text-center text-[20px] px-2 md:px-0 my-8 py-2 md:w-[20%] bg-[#231F20] text-[#ebebeb] rounded-lg shadow hover:cursor-pointer hover:bg-[#3c3a3b] hover:text-[#FAB038] h-fit" id="checkout-btn">Checkout</button>
            </main>
        </div>
    );
};

export default CheckoutPage;
