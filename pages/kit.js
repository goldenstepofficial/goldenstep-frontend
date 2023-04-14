import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from '../components/Layout/Layout'
import { useRouter } from "next/router";

const Kit = () => {
    const [colorChange, setColorchange] = useState(false);
    const [kit, setKit] = useState([]);

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };

    const router = useRouter()

    const getProducts = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        await fetch("https://backend.goldenstep.in/store/products/?category=2", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const data = JSON.parse(result);
                setKit(data);
            })
            .catch((error) => console.log("error", error));
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNavbarColor);
        getProducts()
    }, []);


    return (
        <Layout>
            <div className='overflow-x-hidden md:mt-[50px] mt-10'>
                <div className="h-[50vh] md:h-full">
                    <video
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                    >
                        <source src={"/images/kit-banner.mp4"} type="video/mp4" />
                    </video>
                </div>
                <div>
                    <div className="grid md:grid-cols-2 mx-auto md:w-[70%]">
                        {kit.map((item, index) => {
                            return (
                                <div className="text-center mx-10 h-[300px] border mt-10 shadow-xl cursor-pointer hover:scale-[102%] transition ease-in-out" key={index}
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
            </div>
        </Layout>
    )
}

export default Kit;
