import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";

const Navbar = () => {
  const router = useRouter();

  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchButtonVisible, setIsSearchButtonVisible] = useState(false);
  const [width, setWidth] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchOverlayVisible, setIsSearchOverlayVisible] = useState(false);
  const [isBackgroundBlurred, setIsBackgroundBlurred] = useState(false);

  const { showCart, setShowCart } = useStateContext();

  const handleIconClick = () => {
    setIsExpanded(!isExpanded);

    if (!isExpanded) {
      setSearchTerm("");
      setIsSearchButtonVisible(true);
      setIsSearchOverlayVisible(true);
      setIsBackgroundBlurred(true);
    } else {
      setIsSearchButtonVisible(false);
      setIsSearchOverlayVisible(false);
      setIsBackgroundBlurred(false);
    }
  };

  const inputRef = useRef();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  if (width > 1000) {
    return (
      <>
        <div className="flex flex-col items-center w-full pb-2">
          <div className="grid grid-cols-3 w-full items-center px-10">
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
            </div>
            <div className="flex justify-center">
              <Image
                src={"/images/logo.jpg"}
                width={90}
                height={90}
                onClick={() => router.push("/")}
                className="cursor-pointer"
                alt="goldenstep-logo"
              />
            </div>
            <div className="flex flex-row justify-end mr-3">
              <Image
                src={"/images/user.png"}
                width={25}
                height={25}
                className="mx-2 hover:cursor-pointer"
                onClick={() => router.push("/login")}
                alt="user"
              />
              <Image
                src={"/images/bag.png"}
                width={25}
                height={25}
                className="mx-2 hover:cursor-pointer"
                alt="cart"
                onClick={() => {
                  setShowCart(!showCart);
                }}
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-center gap-16 mt-5 items-center text-black text-[18px] uppercase font-bold">
            <Link
              href={"/crates"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Crates
            </Link>
            <Link
              href={"/accessories"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Accessories
            </Link>
            <Link
              href={"/kit"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Kit
            </Link>
          </div>
          {isSearchOverlayVisible && (
            <div className="fixed top-0 w-full h-screen flex bg-black bg-opacity-50">
              <div className="w-full px-28 justify-between h-[25%] bg-white p-4 top-0 flex flex-row items-center">
                <Image
                  src={"/images/search.png"}
                  width={25}
                  height={25}
                  alt="search"
                />
                <input
                  className="w-[60%] border border-black p-3 bg-white focus:outline-none rounded-full text-[14px] transition-all duration-500"
                  placeholder="Search Our Store"
                />
                <button
                  className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer"
                  onClick={handleIconClick}
                >
                  &#x2715;
                </button>
              </div>
            </div>
          )}
          {showCart && <Cart />}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="pb-1">
        <div className="grid grid-cols-3 w-full items-center">
          <div className="flex flex-row items-center">
            <Image
              src={"/images/menu.png"}
              width={20}
              height={20}
              className="mx-2 hover:cursor-pointer"
              alt="menu"
              onClick={() => setMenuOpen(true)}
            />
            <Image
              src={"/images/search.png"}
              className={`${isExpanded ? "absolute top-0 right-0" : ""} ${
                isSearchButtonVisible ? "hidden" : "block"
              } cursor-pointer`}
              width={20}
              height={20}
              onClick={handleIconClick}
              alt="search"
            />
          </div>
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
              src={"/images/user.png"}
              width={20}
              height={20}
              className="mx-2 hover:cursor-pointer"
              alt="user"
              onClick={() => router.push("/login")}
            />
            <Image
              src={"/images/bag.png"}
              width={20}
              height={20}
              className="mx-2 hover:cursor-pointer"
              alt="cart"
              onClick={() => {
                setShowCart(!showCart);
              }}
            />
          </div>
          {isSearchOverlayVisible && (
            <div className="fixed top-0 w-full h-screen flex bg-black bg-opacity-50">
              <div className="w-full px-5 justify-between h-[15%] bg-white p-4 top-0 flex flex-row items-center">
                <Image
                  src={"/images/search.png"}
                  width={25}
                  height={25}
                  alt="search"
                />
                <input
                  className="w-[80%] border border-black p-3 bg-white focus:outline-none rounded-full text-[14px] transition-all duration-500"
                  placeholder="Search Our Store"
                />
                <button
                  className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer"
                  onClick={handleIconClick}
                >
                  &#x2715;
                </button>
              </div>
            </div>
          )}
        </div>
        {menuOpen && (
          <div className="flex flex-col bg-white h-max pb-8 top-0 absolute w-[80%] z-10 gap-12 items-center text-black font-bold uppercase">
            <div className="w-full justify-start">
              <Image
                src={"/images/close.png"}
                width={50}
                height={50}
                className="mx-2 mt-2 hover:cursor-pointer"
                alt="close"
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <Link
              href={"/accessories"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Accessories
            </Link>
            <Link
              href={"/crates"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Crates
            </Link>
            <Link
              href={"/kit"}
              className="hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Kit
            </Link>
          </div>
        )}
      </div>
      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
