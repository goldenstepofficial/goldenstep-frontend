const paymentSessionId = localStorage.getItem('sessionId');
const cashfree = new Cashfree(paymentSessionId);

function redirectToCheckout() {
    cashfree.redirect();
}

// attach the redirectToCheckout function to a button's onClick event listener
document.getElementById('checkout-btn').addEventListener('click', redirectToCheckout);
