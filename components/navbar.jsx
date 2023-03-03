import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();

  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchButtonVisible, setIsSearchButtonVisible] = useState(false);
  const [width, setWidth] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleIconClick = () => {
    setIsExpanded(!isExpanded);

    if (!isExpanded) {
      setSearchTerm("");
      setIsSearchButtonVisible(true);
    } else {
      setIsSearchButtonVisible(false);
    }
  };

  const inputRef = useRef();

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsExpanded(false);
      setIsSearchButtonVisible(false);
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  if (width > 1000) {
    return (
      <>
        <div className="flex flex-col items-center w-full pb-2">
          <div className="grid grid-cols-3 w-full items-center">
            <button
              className="flex flex-row items-center justify-start ml-3 text-[#ebebeb]"
              onClick={() => router.push("/signup")}
            >
              <span>Sign In</span>
              <Image
                src={"/images/user.png"}
                width={30}
                height={30}
                className="mx-2 hover:cursor-pointer"
                alt="user"
              />
            </button>
            <div className="flex justify-center">
              <Image
                src={"/images/logo.jpg"}
                width={100}
                height={100}
                onClick={() => router.push("/")}
                className="cursor-pointer"
                alt="goldenstep-logo"
              />
            </div>
            <div className="flex flex-row justify-end mr-3">
              <Image
                src={"/images/heart.png"}
                width={30}
                height={30}
                className="mx-2 hover:cursor-pointer"
                alt="user"
              />
              <Image
                src={"/images/cart.png"}
                width={30}
                height={30}
                className="mx-2 hover:cursor-pointer"
                alt="cart"
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-around mt-5 items-center text-[#ebebeb] text-[18px]">
            <Link
              href={"/care"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Store
            </Link>
            <Link
              href={"/sneakers"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Crates
            </Link>
            <Link
              href={"/"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Products
            </Link>
            <Link
              href={"/"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Kit
            </Link>
            <Link
              href={"/"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Best Of All
            </Link>
            <div className="flex flex-row items-center relative" ref={inputRef}>
              <Image
                src={"/images/search.png"}
                className={`${isExpanded ? "absolute top-0 right-0" : ""} ${
                  isSearchButtonVisible ? "hidden" : "block"
                } cursor-pointer`}
                width={25}
                height={25}
                onClick={handleIconClick}
                alt="search"
              />
              <input
                className={`${
                  isExpanded
                    ? "w-[14rem] border border-[#ebebeb] py-2 px-3"
                    : "w-0 py-0 px-0"
                } bg-[#3c3a3b] focus:outline-none rounded text-[14px] transition-all duration-500 opacity-${
                  isExpanded ? "100" : "0"
                }`}
              />
              <button
                className={`${
                  isSearchButtonVisible ? "block" : "hidden"
                } absolute top-0 right-0 bg-[#ebebeb] hover:bg-gray-300 text-[#3c3a3b] hover:text-gray-900 cursor-pointer px-2 py-2 rounded text-[14px]`}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="pb-2">
        <div className="grid grid-cols-3 w-full items-center">
          <button className="flex flex-row items-center justify-start ml-3">
            <Image
              src={"/images/menu.png"}
              width={20}
              height={20}
              className="mx-2 hover:cursor-pointer"
              alt="menu"
              onClick={() => setMenuOpen(true)}
            />
            <Image
              src={"/images/user.png"}
              width={20}
              height={20}
              className="mx-2 hover:cursor-pointer"
              alt="user"
              onClick={() => router.push("/signup")}
            />
          </button>
          <div className="flex justify-center">
            <Image
              src={"/images/logo.jpg"}
              width={70}
              height={70}
              onClick={() => router.push("/")}
              className="cursor-pointer"
              alt="goldenstep-logo"
            />
          </div>
          <div className="flex flex-row justify-end mr-3">
            <Image
              src={"/images/heart.png"}
              width={20}
              height={20}
              className="mx-2 hover:cursor-pointer"
              alt="user"
            />
            <Image
              src={"/images/cart.png"}
              width={20}
              height={20}
              className="mx-2 hover:cursor-pointer"
              alt="cart"
            />
          </div>
        </div>
        {menuOpen && (
          <div className="flex flex-col bg-[#3c3a3b] h-screen top-0 absolute w-full z-10 justify-around items-center text-[#ebebeb] text-[18px]">
            <Image
              src={"/images/close.png"}
              width={30}
              height={30}
              className="mx-2 hover:cursor-pointer"
              alt="close"
              onClick={() => setMenuOpen(false)}
            />
            <Link
              href={"/care"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Store
            </Link>
            <Link
              href={"/sneakers"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Crates
            </Link>
            <Link
              href={"/"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Products
            </Link>
            <Link
              href={"/"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Kit
            </Link>
            <Link
              href={"/"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Best Of All
            </Link>
            <div className="flex flex-row items-center relative" ref={inputRef}>
              <Image
                src={"/images/search.png"}
                className={`${isExpanded ? "absolute top-0 right-0" : ""} ${
                  isSearchButtonVisible ? "hidden" : "block"
                } cursor-pointer`}
                width={25}
                height={25}
                onClick={handleIconClick}
                alt="search"
              />
              <input
                className={`${
                  isExpanded
                    ? "w-[14rem] border border-[#ebebeb] py-2 px-3"
                    : "w-0 py-0 px-0"
                } bg-[#3c3a3b] focus:outline-none rounded text-[14px] transition-all duration-500 opacity-${
                  isExpanded ? "100" : "0"
                }`}
              />
              <button
                className={`${
                  isSearchButtonVisible ? "block" : "hidden"
                } absolute top-0 right-0 bg-[#ebebeb] hover:bg-gray-300 text-[#3c3a3b] hover:text-gray-900 cursor-pointer px-2 py-2 rounded text-[14px]`}
              >
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
