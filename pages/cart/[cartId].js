import React from 'react'
import Layout from '../../components/Layout/Layout';
import MyHead from '../../components/Head';
import Image from 'next/image';
import Link from 'next/link';

const Cart = ({ cart }) => {
    return (
        <>
            <Layout>
                <MyHead title="Cart - Goldenstep" description="This is the homepage" />
                <div className='w-full mt-40'>
                    {cart.items.map((data, index) => (
                        <>
                            <div
                                className="flex flex-row justify-between border-y mb-2 p-5"
                                key={index}
                            >
                                <Image
                                    src={data.product.image}
                                    alt="product-image"
                                    className="h-28 w-32 rounded-lg"
                                    width={120}
                                    height={105}
                                />
                                <div>
                                    <Link
                                        href={`/products/${data.product.id}/${data.product.slug}`}
                                        className="text-center cursor-pointer"
                                    >
                                        {data.product.name}
                                    </Link>
                                    <div className="flex flex-row items-center md:mt-5 mt-2">
                                        <h1>Quantity: </h1>
                                        {" "}
                                        <span className="border-y px-4 py-1">
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
                                            width={18}
                                            height={18}
                                        />
                                    </button>
                                    <p>Rs. {data.sub_total_price}</p>
                                </div>
                            </div>
                        </>
                    ))}
                    <h1 className="text-[20px] mb-2 ml-4">
                        Subtotal: Rs. {cart.total_price}
                    </h1>
                </div>
            </Layout>
        </>
    )
}

export default Cart

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