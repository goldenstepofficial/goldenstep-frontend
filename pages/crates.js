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
                <div className='overflow-x-hidden md:mt-32 mt-0'>
                    <div className="relative">
                        <div className="md:h-[90vh] h-[50vh]">
                            <Image
                                src={"/images/accessories-poster.jpg"}
                                alt="goldenstep-accessories-poster"
                                fill
                                className="brightness-[65%]"
                            />
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                            <h1 className="md:text-[59px] text-[30px] mt-10 md:mt-20 font-bold md:mb-4">
                                Sneaker Crates
                            </h1>
                        </div>
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
                                            <p className="border mx-auto w-fit px-2 mt-1 rounded-lg text-[#FFBC00] bg-black pt-1">
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
