import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { useState, useEffect } from "react"
import Image from "next/image"
import SneakerData from "../data/sneaker.json";

const Sneakers = () => {
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
                <Image src={"/images/sneaker-poster.jpeg"} fill />
            </div>
            <div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-3">
                    {SneakerData.sneakers.map((item, index) => {
                        return (
                            <div className="text-center mx-2 h-[250px] border mt-10 shadow-xl cursor-pointer hover:scale-105 transition ease-in-out" key={index}>
                                <div className="h-[150px]">
                                    <Image src={item.image} width={250} height={150} alt='sneaker-product' />
                                </div>
                                <div>
                                    <p className="text-[14px]">{item.title}</p>
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
        </>
    )
}

export default Sneakers