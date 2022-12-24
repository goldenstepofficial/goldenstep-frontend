import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar2 from '../components/navbar2';
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
                <div className="fixed top-0 w-full bg-white shadow-xl z-[999]">
                    <Navbar2 />
                </div>
            ) : (
                <div className="fixed top-0 w-full z-[999]">
                    <Navbar />
                </div>
            )}
            <div className="md:h-[600px] h-[300px] top-0 relative">
                <Image src={"/images/care-poster.webp"} layout="fill" />
            </div>
            <div 
            // className="grid grid-cols-2"
            >
                {/* <div className="w-[25%]">

                </div> */}
                <div className=" grid grid-cols-4 w-full">
                    {CareData.care.map((item, index) => {
                        return (
                            <div className="text-center mx-auto h-[500px]">
                                <div className="h-[300px] overflow-hidden flex items-center">
                                    <Image src={item.image} width={100} height={100} />
                                </div>
                                <div>
                                    <p className="text-[14px]"> {item.title} </p>
                                    <p>₹{item.price}</p>
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
