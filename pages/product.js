import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Product = () => {
    const [cartGif, setCartGif] = useState(false)
    const [heartGif, setHeartGif] = useState(false)

    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const [selectedImage, setSelectedImage] = useState('/images/product-sneaker3.png');
    const productViewImages = [
        '/images/product-sneaker3.png',
        '/images/product-sneaker4.webp',
    ];

    const handleProductViewClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <>
            <div className="fixed top-0 w-full bg-[#3c3a3b] shadow-xl z-[999]">
                <Navbar />
            </div>
            <div className='md:mt-40 mt-20 md:mx-5 md:grid md:grid-cols-2 text-[#ebebeb] md:h-screen'>
                <div>
                    <div className='md:w-[500px] md:h-[298px] overflow-hidden'>
                        <img
                            src={selectedImage}
                            onClick={() => setSelectedImage('/images/product-sneaker3.png')} className="rounded"
                            alt='product-image'
                        />
                    </div>
                    <div className='mt-2 mx-5 grid grid-cols-4 items-center gap-5'>
                        {productViewImages.map((image, index) => (
                            <div key={index} className='cursor-pointer' onClick={() => handleProductViewClick(image)}>
                                <Image src={image} width={100} height={100} alt='product-image' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col md:mx-10 md:mt-0 mt-10 overflow-y-scroll scrollbar'>
                    <h1 className='md:text-[40px] text-[30px] text-center'>Air Jordan 1 Retro High (University Blue)</h1>
                    <span className='text-[25px] text-center ml-5 mt-5'>₹49,000/-</span>
                    <div className="flex flex-row items-center ml-5 mt-5">
                        <button
                            onClick={handleDecrease}
                            className="border rounded-l py-2 px-4 bg-[#3a3c3b]"
                        >
                            <span className="font-bold">-</span>
                        </button>
                        <span className="border-t border-b px-8 py-2 bg-[#3a3c3b]">{quantity}</span>
                        <button
                            onClick={handleIncrease}
                            className="border rounded-r py-2 px-4 bg-[#3a3c3b]"
                        >
                            <span className="font-bold">+</span>
                        </button>
                    </div>
                    <div className='grid grid-cols-2 gap-6 w-[80%] mx-auto justify-around mt-10'>
                        <button className={`border p-2 rounded flex justify-center hover:bg-white transition duration-500 ease-in-out`} onMouseEnter={() => setCartGif(true)} onMouseLeave={() => setCartGif(false)}>
                            {
                                cartGif ? (
                                    <Image src={'/images/cart-gif.gif'} width={20} height={20} alt='cart-gif' />
                                ) : (
                                    <span>
                                        Add to Cart
                                    </span>
                                )
                            }
                        </button>
                        <button className={`border p-2 rounded flex justify-center hover:bg-white transition duration-500 ease-in-out`} onMouseEnter={() => setHeartGif(true)} onMouseLeave={() => setHeartGif(false)}>
                            {
                                heartGif ? (
                                    <Image src={'/images/heart-gif.gif'} width={20} height={20} alt='heart-gif' />
                                ) : (
                                    <span>
                                        Add to Wishlist
                                    </span>
                                )
                            }
                        </button>
                    </div>
                    <div
                        className="w-[80%] mx-auto mt-3 p-2 border rounded text-center bg-[#231F20] text-[#ebebeb] shadow hover:cursor-pointer hover:bg-[#3c3a3b] hover:text-[#FAB038] hover:border-none"
                    >
                        Buy Now
                    </div>
                    <p className='mt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquam, nesciunt et rem repellendus ex iure sint unde illum vitae Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, pariatur!
                        <br />
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum optio sit molestiae dolorem explicabo omnis facilis earum delectus, magni odio quam officiis, eos architecto, voluptatem sint reiciendis voluptas vero? Fugit in magnam odit quos voluptate dolores quasi error, fuga ut!
                        <br />
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum optio sit molestiae dolorem explicabo omnis facilis earum delectus, magni odio quam officiis, eos architecto, voluptatem sint reiciendis voluptas vero? Fugit in magnam odit quos voluptate dolores quasi error, fuga ut!
                    </p>
                </div>
            </div>
            {/* <div>
                <h1 className='text-center text-[30px] mt-10'>You May Also Like</h1>
            </div> */}
            <Footer />
        </>
    )
}

export default Product;
