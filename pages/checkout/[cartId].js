import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CheckoutPage from '../../components/checkout-page';

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

        // Make a fetch request to the API with the FormData object as the request body
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
            <div className='flex flex-row w-full justify-between pl-5'>
                <div className='w-[60%] mr-10'>
                    <div
                        className='w-full flex justify-center cursor-pointer'
                        onClick={() => router.push("/")}
                    >
                        <img
                            src="/images/logo.jpg"
                            alt="goldenstep-logo"
                            className='h-24 justify-center'
                        />
                    </div>
                    {!isPayment &&
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <h1 className='mb-1'>Contact Information:</h1>
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
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2"
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
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2"
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
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2"
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
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2"
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
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2"
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
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2"
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
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2"
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
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2"
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
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2"
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
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2"
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
                <div className='w-[40%] bg-[#ededed] border-black border-l'>
                    {cart.items.map((data, index) => (
                        <>
                            <div
                                className="flex flex-row justify-between border-y mb-2 p-5"
                                key={index}
                            >
                                <img
                                    src={data.product.image}
                                    alt="product-image"
                                    className="h-28 w-32 rounded-lg"
                                />
                                <div>
                                    <h1>{data.product.name}</h1>
                                </div>
                                <div className="flex flex-col justify-between items-end">
                                    <button onClick={() => deleteItem(data.id)}>
                                        <img
                                            src="/images/delete.png"
                                            alt="delete-item"
                                            className="h-5"
                                        />
                                    </button>
                                    <p>Rs. {data.sub_total_price}</p>
                                </div>
                            </div>
                        </>
                    ))}
                    <h1 className="text-[20px] mb-2">
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
