import React from 'react'
import Layout from '../components/Layout/Layout'
import MyHead from '../components/Head'

const AboutUs = () => {
    return (
        <>
            <Layout>
                <MyHead title="About Us - Goldenstep" description="This is the homepage" />
                <div className="max-w-4xl md:mt-32 mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 text-center">About Golden Step</h1>
                    <p className="mt-6 text-gray-500">Golden Step is a premium sneaker care company that offers high-quality sneaker cleaning products and premium shoe crates. Our shoe crates are made of high-quality wood and designed to not only protect your sneakers but also add a touch of luxury to your sneaker collection.</p>
                    <p className="mt-6 text-gray-500">At Golden Step, we understand that sneakers are more than just shoes. They are a reflection of your personal style and a symbol of your individuality. That&apos;s why we are dedicated to providing the best possible care for your sneakers, so you can keep them looking and feeling their best for years to come.</p>
                    <p className="mt-6 text-gray-500">Our sneaker cleaning products are made of the highest quality ingredients and are specifically designed to clean and protect your sneakers. We offer a wide range of products, including cleaning sprays, brushes, and microfiber towel, to meet all of your sneaker care needs.</p>
                    <p className="mt-6 text-gray-500">Our premium shoecrates are the perfect way to showcase your sneaker collection while keeping them safe and protected. Our shoecrates are made of high-quality wood and feature a sleek design that complements any home decor.</p>
                    <p className="mt-6 text-gray-500">At Golden Step, we are passionate about sneakers and sneaker culture. We are committed to providing our customers with the highest quality products and exceptional customer service. We believe that every sneaker deserves the best care possible, and we are dedicated to providing that care to each and every one of our customers.</p>
                </div>
            </Layout>
        </>
    )
}

export default AboutUs
