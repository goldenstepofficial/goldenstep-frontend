import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const PaymentStatus = () => {
    const router = useRouter();

    const orderId = router.query.oid;
    console.log("orderid", orderId);

    const checkPaymentStatus = () => {
        const url = `https://backend.goldenstep.in/order/order_status/${orderId}`;

        fetch(url, {
            method: 'GET',
            redirect: 'follow'
        })
            .then((response) => response.text())
            .then((result) => {
                const data = JSON.parse(result);
                if (data.order_status.is_paid == true) {
                    router.push("/payment-success");
                } else {
                    router.push("/payment-failed");
                }
            })
            .catch(error => console.log('error', error));
    };

    useEffect(() => {
        checkPaymentStatus();
    }, [orderId]);

    return (
        <>
            <div className="flex flex-row justify-center items-center h-screen gap-2">
                <div className="w-8 h-8 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
                <div className="w-8 h-8 rounded-full bg-black animate-bounce [animation-delay:.3s]"></div>
                <div className="w-8 h-8 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
            </div>
        </>
    )
}

export default PaymentStatus;
