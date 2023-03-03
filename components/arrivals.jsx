import Image from "next/image";
import SneakerData from "../data/sneaker.json";
import CareData from "../data/care.json";
import { useRouter } from "next/router";

const Arrivals = () => {
  const router = useRouter();

  return (
    <>
      {console.log("TESTING SNEAKER JSON", SneakerData.sneakers)}
      <div className="items-center flex flex-col bg-[#231F20] text-[#ebebeb]">
        <div className="leading-none flex flex-col items-center">
          <h1 className="text-[40px] text-center mt-10">New Arrivals</h1>
          <p className="text-[24]">Sneakers</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-3">
          {SneakerData.sneakers.map((item, index) => {
            return (
              <div
                className="text-center mx-2 h-[250px] mt-10 shadow-2xl cursor-pointer hover:scale-105 transition ease-in-out"
                onClick={() => router.push("/product")}
                key={index}
              >
                <div className="h-[150px]">
                  <Image
                    src={item.image}
                    width={250}
                    height={150}
                    alt="sneaker-products"
                  />
                </div>
                <div>
                  <p className="text-[14px]">{item.title}</p>
                  <p className="mx-auto w-[30%] mt-2 rounded-lg text-[#FAB038] bg-[#231F20] pt-1">
                    ₹{item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="text-center text-[20px] my-8 py-2 md:w-[20%] bg-[#231F20] text-[#ebebeb] rounded-lg shadow hover:cursor-pointer hover:bg-[#3c3a3b] hover:text-[#FAB038]"
          onClick={() => router.push("/sneakers")}
        >
          View More Products
        </div>
      </div>
      <div className="items-center flex flex-col bg-[#231F20]">
        <div className="leading-none flex flex-col items-center text-[#ebebeb]">
          <h1 className="text-[40px] text-center mt-10">New Arrivals</h1>
          <p className="text-[24]">Care</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-3 w-full">
          {CareData.care.map((item, index) => {
            return (
              <div
                className="text-center mx-2 h-[370px] mt-10 shadow-2xl cursor-pointer hover:scale-105 transition ease-in-out text-[#ebebeb]"
                onClick={() => router.push("/product")}
                key={index}
              >
                <div className="h-[250px] overflow-hidden flex flex-col mt-10 items-center">
                  <div className="h-[100px] mx-auto">
                    <Image
                      src={item.image}
                      width={120}
                      height={100}
                      alt="sneaker-care-products"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[14px]"> {item.title} </p>
                  <p className="mx-auto w-[30%] mt-2 rounded-lg text-[#FAB038] bg-[#231F20] pt-1">
                    ₹{item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="text-center text-[20px] my-8 py-2 md:w-[20%] bg-[#231F20] text-[#ebebeb] rounded-lg shadow hover:cursor-pointer hover:bg-[#3c3a3b] hover:text-[#FAB038]"
          onClick={() => router.push("/care")}
        >
          View More Products
        </div>
      </div>
    </>
  );
};

export default Arrivals;
