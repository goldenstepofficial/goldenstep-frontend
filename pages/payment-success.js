import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import MyHead from '../components/Head'
import Link from 'next/link'

const PaymentSuccess = () => {
    return (
        <>
            <Navbar />
            <MyHead title="Payment Success - Goldenstep" description="This is the homepage" />
            <img src="/images/success.gif" alt="" className='md:h-[60vh] h-[30vh] mx-auto' />
            <div className='flex flex-col items-center mb-20'>
                <h1 className='md:text-[50px] text-[26px] leading-tight text-center'>
                    Your Order has been placed!
                </h1>
                <p className='md:text-[18px] text-center text-green-300 font-bold'>
                    Thank you for shopping with us :)
                </p>
                <Link href="/" className='text-center underline mt-5'>Back to Home</Link>
            </div>
            <Footer />
        </>
    )
}

export default PaymentSuccess
