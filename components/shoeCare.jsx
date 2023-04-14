import { useRouter } from "next/router";

const ShoeCare = ({ props }) => {
  const router = useRouter();

  return (
    <>
      <div className="items-center flex flex-col md:mx-0 mx-5">
        <div className="leading-none flex flex-col items-center">
          <h1 className="text-[40px] text-center mt-10">Shoe Care</h1>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 justify-center w-full mx-3">
          {props
            ?.filter((item, index) => [1, 2, 4, 6, 7].includes(index))
            .map((item, index) => {
              return (
                <div
                  className="flex flex-col items-center text-center h-[250px] mt-10 shadow-2xl cursor-pointer hover:scale-105 transition ease-in-out mx-2"
                  onClick={() =>
                    router.push(`/products/${item.id}/${item.slug}`)
                  }
                  key={index}
                >
                  <div className="h-[180px]">
                    <img
                      src={item.thumbnail}
                      width={250}
                      height={150}
                      alt="sneaker-products"
                    />
                  </div>
                  <div>
                    <p className="text-[16px]">{item.name}</p>
                    <p className="mx-auto w-fit px-2 mt-2 rounded-lg text-[#FAB038] bg-[#231F20] pt-1">
                      Rs {item.price}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <div
          className="text-center text-[20px] my-8 md:px-0 px-2 py-2 md:w-[20%] bg-[#231F20] text-[#ebebeb] rounded-lg shadow hover:cursor-pointer hover:bg-[#3c3a3b] hover:text-[#FAB038]"
          onClick={() => router.push("/accessories")}
        >
          View More Products
        </div>
      </div>
    </>
  );
};

export default ShoeCare;
