import React from 'react'
import Layout from '../../components/Layout/Layout';

const Cart = ({ cart }) => {
    return (
        <>
            <Layout>
                <div className='w-full mt-40'>
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
                                    <div className="flex flex-row items-center md:mt-5 mt-2">
                                        <button
                                            // onClick={handleDecrease}
                                            className="border rounded-l py-1 px-2"
                                        >
                                            <span className="font-bold">-</span>
                                        </button>
                                        <span className="border-t border-b px-4 py-1">
                                            {data.quantity}
                                        </span>
                                        <button
                                            // onClick={handleIncrease}
                                            className="border rounded-r py-1 px-2"
                                        >
                                            <span className="font-bold">+</span>
                                        </button>
                                    </div>
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