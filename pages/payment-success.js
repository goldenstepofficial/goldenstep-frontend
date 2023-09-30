import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import MyHead from '../components/Head'

const PaymentSuccess = () => {
    return (
        <>
            <Navbar />
            <MyHead title="Payment Success - Goldenstep" description="This is the homepage" />
            <h1 className='text-[50px] text-center mt-20'>
                Your Order has been placed!
            </h1>
            <p className='text-[18px] text-center text-green-300 mb-20'>
                Thank you for shopping with us :)
            </p>
            <Footer />
        </>
    )
}

export default PaymentSuccess
