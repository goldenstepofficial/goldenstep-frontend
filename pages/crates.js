import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from '../components/Layout/Layout'

const Crates = () => {
    const [crates, setCrates] = useState([])

    const router = useRouter()

    const getProducts = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        await fetch("https://backend.goldenstep.in/store/products/?category=1", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const data = JSON.parse(result);
                setCrates(data);
            })
            .catch((error) => console.log("error", error));
    }

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <>
            <Layout>

                <div className="relative overflow-hidden h-screen md:mt-32 mt-8 -mb-16">
                    <video autoPlay muted loop className="brightness-[30%] w-full h-screen object-cover">
                        <source src={"/images/crates-video.mp4"} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 z-10 flex flex-col overflow-y-scroll scrollbar pb-20">
                        <div className="flex flex-col w-full">
                            {crates.map((item, index) => {
                                return (
                                    <div className="flex md:flex-row flex-col items-center justify-between pt-4 px-5 md:w-[80%] mt-10 md:mx-auto mx-2 border border-[#ffbc00] py-5 rounded" key={index}
                                    >
                                        <div className="h-[200px] flex items-center justify-center">
                                            <img
                                                src={item.thumbnail}
                                                width="300px"
                                                alt={item.name}
                                                className="max-h-full rounded-lg"
                                            />
                                        </div>
                                        <div className="flex flex-col md:items-end items-center md:text-left text-center md:w-[60%]">
                                            <p className="md:text-[35px] uppercase mt-3 text-white">{item.name}</p>
                                            <p className="text-white text-[14px] md:text-right mx-auto my-2">{item.details.shortDesc}</p>
                                            <div className="flex flex-row items-center justify-between mt-2">
                                                <button
                                                    className="px-2 py-1 border rounded text-center bg-[#231F20] text-[#ebebeb] shadow hover:cursor-pointer hover:bg-[#3c3a3b] hover:text-[#FAB038] hover:border-[#3c3a3b]"
                                                    onClick={() => router.push(`products/${item.id}/${item.slug}`)}
                                                >
                                                    View Product
                                                </button>
                                                <p className="border md:px-12 px-5 text-center rounded text-[#FFBC00] bg-black py-1 ml-5 ">
                                                    ₹{item.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Crates;
