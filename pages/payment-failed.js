import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import MyHead from '../components/Head'

const PaymentFailed = () => {
    return (
        <>
            <Navbar />
            <MyHead title="Payment Failed - Goldenstep" description="This is the homepage" />
            <img src="/images/failed.gif" alt="" className='md:h-[60vh] h-[30vh] mx-auto' />
            <div className='flex flex-col items-center mb-20'>
                <h1 className='md:text-[50px] text-[34px] leading-tight text-center'>
                    Your Transaction has been failed!
                </h1>
                <p className='md:text-[18px] text-center text-red-400 font-bold'>
                    There has been some error processing your payment. Please try again later!
                </p>
                <a href="/" className='text-center underline mt-5'>Back to Home</a>
            </div>
            <Footer />
        </>
    )
}

export default PaymentFailed
