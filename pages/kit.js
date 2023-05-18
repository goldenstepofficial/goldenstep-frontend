import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from '../components/Layout/Layout'
import { useRouter } from "next/router";
import MyHead from "../components/Head";

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
            <MyHead title="Kit - Goldenstep" description="This is the homepage" />
            <div className='overflow-x-hidden md:mt-[50px] mt-10'>
                <div className="h-[50vh] md:h-full">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        src={"/images/kit-banner.mp4"}
                        type="video/mp4"
                    ></video>
                </div>
                <div>
                    <div className="grid grid-cols-2 md:mx-auto md:w-[70%] pb-5">
                        {kit.map((item, index) => {
                            return (
                                <div className="text-center md:mx-10 mx-2 pb-3 md:h-[300px] pt-2 border mt-10 shadow-xl cursor-pointer hover:scale-[102%] transition ease-in-out" key={index}
                                    onClick={() => router.push(`products/${item.id}/${item.slug}`)}
                                >
                                    <div className="h-[200px] flex items-center justify-center">
                                        <Image
                                            src={item.thumbnail}
                                            width={250}
                                            height={250}
                                            alt={item.name}
                                            className="max-h-full"
                                        />
                                    </div>
                                    <div>
                                        <p className="md:text-[20px] text-[11px] font-bold uppercase mt-3 text-black">{item.name}</p>
                                        <div className="flex flex-row items-center text-center justify-center mt-2">
                                            <span className="line-through pr-2 text-[14px]">
                                                Rs {item.details.oldPrice}
                                            </span>
                                            <p className="font-bold rounded-lg text-black text-[16px]">
                                                Rs {item.price}
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
    )
}

export default Kit;
