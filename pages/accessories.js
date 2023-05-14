import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from '../components/Layout/Layout'
import { useRouter } from "next/router";
import MyHead from "../components/Head";

const Accessories = () => {
    const [accessories, setAccessories] = useState([]);
    const router = useRouter()

    const getProducts = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        await fetch("https://backend.goldenstep.in/store/products/?category=3", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const data = JSON.parse(result);
                setAccessories(data);
            })
            .catch((error) => console.log("error", error));
    }

    useEffect(() => {
        getProducts()
    }, []);


    return (
        <Layout>
            <MyHead title="Accessories - Goldenstep" description="This is the homepage" />
            <div className='overflow-x-hidden md:mt-[107px] mt-[55px]'>
                <div className="relative">
                    <div className="md:h-[90vh] h-[40vh]">
                        <Image
                            src={"/images/accessories-poster.png"}
                            alt="goldenstep-accessories-poster"
                            fill
                            className="brightness-[90%]"
                        />
                    </div>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 grid-cols-2 mb-10">
                        {accessories.map((item, index) => {
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
                                        <p className="md:text-[18px] text-[11px] font-bold uppercase mt-3 text-black">{item.name}</p>
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
            </div >
        </Layout>
    )
}

export default Accessories;
