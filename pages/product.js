import Navbar2 from '../components/navbar2';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const Product = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeNavbarColor);
    }, []);

    return (
        <>
            <div className="fixed top-0 w-full bg-white shadow-xl z-[999]">
                <Navbar2 />
            </div>
            <div className='my-40 mx-5 grid grid-cols-2'>
                <div>
                    <Image src={'/images/product-sneaker3.png'} width={800} height={800} />
                </div>
                <div className='flex flex-col mx-10'>
                    <h1 className='text-[40px] text-center'>Air Jordan 1 Retro High (University Blue)</h1>
                    <p className='mt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquam, nesciunt et rem repellendus ex iure sint unde illum vitae Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, pariatur!</p>
                    <span className='text-[25px] text-left ml-5 mt-5'>₹49,000/-</span>
                    <div className='flex flex-row w-full justify-around mt-5'>
                        <button className='border p-2 rounded'>Add to Cart</button>
                        <button className='border p-2 rounded'>Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;
