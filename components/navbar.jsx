import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full pb-2">
        <Image src={"/logo.jpg"} width={100} height={100} />
        <div className="flex flex-row w-full justify-around mt-4 items-center text-white text-[18px]">
          <Link
            href={"/care"}
            className="hover:cursor-pointer hover:underline hover:underline-offset-4"
          >
            Care
          </Link>
          <Link
            href={"/sneakers"}
            className="hover:cursor-pointer hover:underline hover:underline-offset-4"
          >
            Sneakers
          </Link>
          <Link
            href={"/"}
            className="hover:cursor-pointer hover:underline hover:underline-offset-4"
          >
            Accessories
          </Link>
          <Link
            href={"/"}
            className="hover:cursor-pointer hover:underline hover:underline-offset-4"
          >
            Shoecase
          </Link>
          <Link
            href={"/"}
            className="hover:cursor-pointer hover:underline hover:underline-offset-4"
          >
            About
          </Link>
          <div className="flex flex-row">
            <Image
              src={"/user.png"}
              width={30}
              height={30}
              className="mx-2 hover:cursor-pointer"
            />
            <Image
              src={"/cart.png"}
              width={30}
              height={30}
              className="mx-2 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
