import React from "react";
import Image from "next/image";
import Link from "next/link";

const footer = () => {
  return (
    <>
      <footer className="mt-12 bg-[#3c3a3b] py-10">
        <div>
          <div className="grid grid-cols-2 justify-items-center md:grid-cols-4">
            <div>
              <h3 className="text-lg font-medium text-gray-100">About</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      Our Story
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      Press
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-100">Products</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      Crates
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/kit">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      Kit
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/accessories">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      Accessories
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:mt-0 mt-10">
              <h3 className="text-lg font-medium text-gray-100">
                Customer Service
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      Contact Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      FAQs
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:mt-0 mt-10">
              <h3 className="text-lg font-medium text-gray-100">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      Instagram
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      Facebook
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      Twitter
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-8 md:flex md:items-center mt-5 md:w-[30%] mx-auto md:justify-between border-gray-700 border-t">
            <p className="text-center w-[90%] mx-auto text-gray-300">
              &copy; 2023 GoldenStep. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
