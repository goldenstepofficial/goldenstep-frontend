import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import MyHead from '../components/Head'

const PaymentFailed = () => {
    return (
        <>
            <Navbar />
            <MyHead title="Payment Failed - Goldenstep" description="This is the homepage" />
            <h1 className='text-[50px] text-center mt-20'>
                Your Transaction has been failed!
            </h1>
            <p className='text-[18px] text-red-400 text-center mb-20'>
                There has been some error processing your payment. Please try again later!
            </p>
            <Footer />
        </>
    )
}

export default PaymentFailed
