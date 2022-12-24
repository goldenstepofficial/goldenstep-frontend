import Image from "next/image";
import SneakerData from "../data/sneaker.json";
import CareData from "../data/care.json";

const Arrivals = () => {
  return (
    <>
      {console.log("TESTING SNEAKER JSON", SneakerData.sneakers)}
      <div className="items-center flex flex-col">
        <div className="leading-none flex flex-col items-center">
          <h1 className="text-[40px] text-center mt-10">New Arrivals</h1>
          <p className="text-[24]">Sneakers</p>
        </div>
        <div className=" grid grid-cols-4 mx-4">
          {SneakerData.sneakers.map((item, index) => {
            return (
              <div className="text-center mx-2 h-[300px]">
                <Image src={item.image} width={250} height={250} />
                <div>
                  <p className="text-[14px]">{item.title}</p>
                  <p>₹{item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center text-[20px] my-8 py-2 w-[20%] border bg-black text-white rounded-lg shadow-xl hover:cursor-pointer hover:bg-gray-100 hover:text-black">
          View More Products
        </div>
      </div>
      <div className="items-center flex flex-col">
        <div className="leading-none flex flex-col items-center">
          <h1 className="text-[40px] text-center mt-10">New Arrivals</h1>
          <p className="text-[24]">Care</p>
        </div>
        <div className=" grid grid-cols-4 mx-4 w-full">
          {CareData.care.map((item, index) => {
            return (
              <div className="text-center mx-auto h-[500px]">
                <div className="h-[400px] overflow-hidden flex items-center">
                  <Image src={item.image} width={200} height={200} />
                </div>
                <div>
                  <p className="text-[14px]"> {item.title} </p>
                  <p>₹{item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center text-[20px] my-8 py-2 w-[20%] border bg-black text-white rounded-lg shadow-xl hover:cursor-pointer hover:bg-gray-100 hover:text-black">
          View More Products
        </div>
      </div>
    </>
  );
};

export default Arrivals;
