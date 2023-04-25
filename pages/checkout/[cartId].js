import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CheckoutPage from '../../components/checkout-page';
import MyHead from '../../components/Head';
import Image from 'next/image';

const CheckoutComponent = ({ cart }) => {
    console.log('Cart:', cart);

    const router = useRouter()

    const [isPayment, setIsPayment] = useState(false)

    const [formValues, setFormValues] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        address_line_1: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        address_line_2: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new FormData object
        const formdata = new FormData();

        // Append the form values to the FormData object
        formdata.append("cart_id", cart.id);
        formdata.append("first_name", formValues.first_name);
        formdata.append("last_name", formValues.last_name);
        formdata.append("phone_number", formValues.phone_number);
        formdata.append("email", formValues.email);
        formdata.append("address_line_1", formValues.address_line_1);
        formdata.append("country", formValues.country);
        formdata.append("state", formValues.state);
        formdata.append("city", formValues.city);
        formdata.append("pincode", formValues.pincode);
        formdata.append("address_line_2", formValues.address_line_2);

        fetch("https://backend.goldenstep.in/order/", {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        })
            .then((response) => response.text())
            .then((result) => {
                const data = JSON.parse(result);
                console.log(data)
                localStorage.setItem('sessionId', data.payment_session_id)
                setIsPayment(true)
            })
            .catch(error => console.log('error', error));
    };


    return (
        <>
            <MyHead title="Checkout - Goldenstep" description="This is the homepage" />
            <div
                className='w-[20%] mx-auto cursor-pointer md:hidden block mb-3'
                onClick={() => router.push("/")}
            >
                <Image
                    src="/images/logo.jpg"
                    alt="goldenstep-logo"
                    className='h-16 justify-center'
                    width={60}
                    height={60}
                />
            </div>
            <div className='flex md:flex-row flex-col-reverse w-full justify-between md:pl-5'>
                <div className='md:w-[60%] md:mr-10 md:mx-0 mx-2'>
                    <div
                        className='w-[20%] mx-auto cursor-pointer md:block hidden mb-5'
                        onClick={() => router.push("/")}
                    >
                        <Image
                            src="/images/logo.jpg"
                            alt="goldenstep-logo"
                            className='h-24 justify-center'
                            width={90}
                            height={90}
                        />
                    </div>
                    {!isPayment &&
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <h1 className='mb-1 md:mt-0 mt-2'>Contact Information:</h1>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={formValues.email}
                                            onChange={handleChange}
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-2 border"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h1 className='mb-2'>Shipping Address: </h1>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Country
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="country"
                                        id="country"
                                        required
                                        value={formValues.country}
                                        onChange={handleChange}
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2px-2 border"
                                    />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-5'>
                                <div>
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            required
                                            value={formValues.first_name}
                                            onChange={handleChange}
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-2 border"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            required
                                            value={formValues.last_name}
                                            onChange={handleChange}
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-2 border"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="address_line_1" className="block text-sm font-medium text-gray-700">
                                    Address Line 1
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="address_line_1"
                                        id="address_line_1"
                                        required
                                        value={formValues.address_line_1}
                                        onChange={handleChange}
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-2 border"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="address_line_2" className="block text-sm font-medium text-gray-700">
                                    Address Line 2 (Optional)
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="address_line_2"
                                        id="address_line_2"
                                        value={formValues.address_line_2}
                                        onChange={handleChange}
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-2 border"
                                    />
                                </div>
                            </div>
                            <div className='grid grid-cols-3 gap-5'>
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            required
                                            value={formValues.city}
                                            onChange={handleChange}
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-2 border"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                        State
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            required
                                            value={formValues.state}
                                            onChange={handleChange}
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-2 border"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                                        Pincode
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="pincode"
                                            id="pincode"
                                            required
                                            value={formValues.pincode}
                                            onChange={handleChange}
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-2 border"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="tel"
                                        name="phone_number"
                                        id="phone_number"
                                        required
                                        value={formValues.phone_number}
                                        onChange={handleChange}
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-2 border"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-between w-full pb-5'>
                                <button
                                    className=""
                                    onClick={() => router.push(`/cart/${cart.id}`)}
                                >
                                    <span className='text-[26px] mr-1'>{`<`}</span>Return to Cart
                                </button>
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Place Order
                                </button>
                            </div>
                        </form>
                    }
                    {isPayment && <CheckoutPage />}
                </div>
                <div className='md:w-[40%] w-full bg-[#ededed] md:border-black md:border-l'>
                    {cart.items.map((data, index) => (
                        <>
                            <div
                                className="flex flex-row justify-between border-y mb-2 py-5 px-3"
                                key={index}
                            >
                                <Image
                                    src={data.product.image}
                                    alt={data.product.name}
                                    className="h-28 w-32 rounded-lg"
                                    width={120}
                                    height={105}
                                />
                                <div className="flex flex-col items-center mr-2">
                                    <h1 className="text-center">{data.product.name}</h1>
                                    <div className="flex flex-row items-center md:mt-5 mt-2">
                                        Quantity:{" "}
                                        <span className="border-t border-b px-4 py-1">
                                            {data.quantity}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between items-end">
                                    <button onClick={() => deleteItem(data.id)}>
                                        <Image
                                            src="/images/delete.png"
                                            alt="delete-item"
                                            className="h-5"
                                            height={18}
                                            width={18}
                                        />
                                    </button>
                                    <p>Rs. {data.sub_total_price}</p>
                                </div>
                            </div>
                        </>
                    ))}
                    <div className="fixed bottom-0 bg-gray-200 md:w-[40%] w-full py-5 text-center md:block hidden">
                        <h1 className="text-[20px] mb-2">
                            Subtotal: Rs. {cart.total_price}
                        </h1>
                    </div>
                    <h1 className="text-[20px] md:text-right text-center mb-2 md:mx-0 mx-2 px-3 md:hidden block">
                        Subtotal: Rs. {cart.total_price}
                    </h1>
                </div>
            </div>
        </>
    );
};

export default CheckoutComponent;

export const getServerSideProps = async (context) => {
    async function getCartItems() {
        try {
            const response = await fetch('https://backend.goldenstep.in/store/carts/' + context.params.cartId);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching cart data:', error);
            return null;
        }
    }

    const cart = await getCartItems();
    return {
        props: {
            cart,
        },
    };
};
