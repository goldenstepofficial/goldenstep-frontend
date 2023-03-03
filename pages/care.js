import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CareData from "../data/care.json";

const Care = () => {
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
        <div className='overflow-x-hidden'>
            {colorChange ? (
                <div className="fixed top-0 w-full bg-[#231F20] shadow-xl z-[999]">
                    <Navbar />
                </div>
            ) : (
                <div className="fixed top-0 w-full z-[999]">
                    <Navbar />
                </div>
            )}
            <div className="md:h-[600px] h-[300px] top-0 relative">
                <Image src={"/images/care-poster.webp"} layout="fill" alt="sneaker-care-poster" />
            </div>
            <div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-3 w-full">
                    {CareData.care.map((item, index) => {
                        return (
                            <div className="text-center mx-2 h-[370px] border mt-10 shadow-xl cursor-pointer hover:scale-105 transition ease-in-out" key={index}>
                                <div className="h-[250px] overflow-hidden flex flex-col mt-10 items-center">
                                    <div className="h-[100px] mx-auto">
                                        <Image src={item.image} width={120} height={100} alt='sneaker-care-product' />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[14px]"> {item.title} </p>
                                    <p className="border mx-auto w-[30%] mt-2 rounded-lg text-[#FFBC00] bg-black pt-1">
                                        ₹{item.price}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Care;
