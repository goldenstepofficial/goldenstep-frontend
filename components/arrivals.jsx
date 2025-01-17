import { useRouter } from "next/router";
import Image from "next/image";

const Arrivals = ({ props }) => {
  const router = useRouter();

  return (
    <>
      <div className="items-center flex flex-col text-black">
        <div className="leading-none flex flex-col items-center">
          <h1 className="text-[40px] text-center mt-10">New Arrivals</h1>
          <p className="text-[24]">Premium Crates</p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center w-full mx-3">
          {props?.slice(2, 4).map((item, index) => {
            return (
              <div
                className="flex flex-col items-center text-center h-[250px] mt-10 shadow-2xl cursor-pointer hover:scale-105 transition ease-in-out mx-10"
                onClick={() => router.push(`/products/${item.id}/${item.slug}`)}
                key={index}
              >
                <div className="h-[180px]">
                  <Image
                    src={item.thumbnail}
                    width={250}
                    height={150}
                    alt={item.name}
                  />
                </div>
                <div>
                  <p className="text-[16px]">{item.name}</p>
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
        <div
          className="text-center text-[20px] px-2 md:px-0 my-8 py-2 md:w-[20%] bg-[#231F20] text-[#ebebeb] rounded-lg shadow hover:cursor-pointer hover:bg-[#3c3a3b] hover:text-[#FAB038]"
          onClick={() => router.push("/crates")}
        >
          View All Crates
        </div>
      </div>
    </>
  );
};

export default Arrivals;
