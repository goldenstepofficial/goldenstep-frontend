import Navbar from "../components/navbar"
import Navbar2 from "../components/navbar2"
import Footer from "../components/footer"
import { useState, useEffect } from "react"
import Image from "next/image"

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
                <div className="fixed top-0 w-full bg-white shadow-xl z-[999]">
                    <Navbar2 />
                </div>
            ) : (
                <div className="fixed top-0 w-full z-[999]">
                    <Navbar />
                </div>
            )}
            <div className="md:h-[600px] h-[300px] top-0 relative">
                <Image src={"/images/sneaker-poster.jpeg"} layout="fill" />
            </div>
            <div>
                THIS IS SNEAKERS PAGE
            </div>
            <Footer />
        </>
    )
}

export default Sneakers