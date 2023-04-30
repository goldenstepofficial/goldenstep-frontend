import React from 'react'
import Layout from '../components/Layout/Layout'
import MyHead from '../components/Head'

const ShippingDelivery = () => {
    return (
        <Layout>
            <MyHead title="Terms and Conditions - Goldenstep" description="This is the homepage" />
            <div className="max-w-4xl md:mt-32 mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-extrabold text-gray-900 text-center">
                    Shipping and Delivery Policy for GoldenStep
                </h1>
                <p className="mt-6 text-gray-500">
                    Thank you for choosing GoldenStep as your preferred provider of products and services. Please read the following information carefully to understand our shipping and delivery policies.
                </p>
                <h2 className="mt-10 text-lg font-medium text-gray-900">Shipping:</h2>

                <p className="mt-6 text-gray-500">
                    We offer shipping within India, and all orders are processed within 1-3 business days. Shipping times will vary depending on the destination location and shipping method selected at checkout. The shipping cost will be calculated based on the weight of the items in your cart and the shipping method selected.
                </p>

                <h2 className="mt-10 text-lg font-medium text-gray-900">Delivery:</h2>
                <p className="mt-6 text-gray-500">
                    We use porter services to deliver your orders, and we always strive to ensure that your orders are delivered within the estimated timeframe. However, please note that shipping times may be affected by factors outside of our control, such as traffic and weather conditions.
                    <br />
                    <br />
                    Once your order has been shipped, you will receive a tracking number via email, which you can use to track the delivery status of your order. If you have any questions or concerns regarding the delivery of your order, please contact our customer service team, and we will be happy to assist you.

                </p>
                <h2 className="mt-10 text-lg font-medium text-gray-900">Returns and Refunds:</h2>
                <p className="mt-6 text-gray-500">
                    If for any reason you are not satisfied with your purchase, please contact us within 7 days of receiving your order, and we will arrange for a return or exchange. Please note that returned items must be in their original condition and packaging, and the cost of return shipping will be the responsibility of the customer.
                    <br />
                    <br />
                    If you receive a damaged or defective item, please contact us immediately, and we will arrange for a replacement or refund.
                    <br />
                    <br />
                    Thank you for choosing GoldenStep as your preferred provider of products and services. If you have any further questions or concerns, please do not hesitate to contact our customer service team.

                </p>
            </div>
        </Layout>
    )
}

export default ShippingDelivery
