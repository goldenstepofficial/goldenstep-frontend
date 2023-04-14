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
                <div className='overflow-x-hidden md:mt-24 mt-0'>
                    <div className="h-[50vh] md:h-[80vh]">
                        <video
                            autoPlay
                            muted
                            loop
                            className="brightness-[80%] w-full h-full object-cover md:hidden block"
                        >
                            <source src={"/images/crates-banner3.mp4"} type="video/mp4" />
                        </video>
                        <video
                            autoPlay
                            muted
                            loop
                            className="brightness-[80%] w-full h-full object-cover md:block hidden"
                        >
                            <source src={"/images/crates-banner.mp4"} type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 grid-cols-1 mx-2 my-2">
                            {crates.map((item, index) => {
                                return (
                                    <div className="text-center mx-10 h-[300px] pt-2 border mt-10 shadow-xl cursor-pointer hover:scale-[102%] transition ease-in-out" key={index}
                                        onClick={() => router.push(`products/${item.id}/${item.slug}`)}
                                    >
                                        <div className="h-[200px] flex items-center justify-center">
                                            <img
                                                src={item.thumbnail}
                                                width="250px"
                                                alt={item.name}
                                                className="max-h-full"
                                            />
                                        </div>
                                        <div>
                                            <p className="md:text-[20px] uppercase mt-3 text-black">{item.name}</p>
                                            <p className="font-bold mx-auto w-fit px-2 mt-1 rounded-lg text-black pt-1">
                                                Rs {item.price}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div >
            </Layout>
        </>
    )
}

export default Crates;
