import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="mt-12 bg-black py-10">
        <div>
          <div className="grid grid-cols-1 ml-5 md:ml-0 md:justify-items-center md:grid-cols-4">
            <div>
              <h3 className="text-[20px] font-bold text-gray-100">About</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/about-us">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      Contact Us
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:mt-0 mt-5">
              <h3 className="text-[20px] font-bold text-gray-100">Products</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/crates">
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
            <div className="md:mt-0 mt-5">
              <h3 className="text-[20px] font-bold text-gray-100">
                Customer Service
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/privacy-policy">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-conditions">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      Terms and Conditions
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/cancellation-refunds-policy">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      Cancellation and Refunds Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/shipping-delivery">
                    <span className="text-base text-gray-300 hover:text-gray-100">
                      Shipping and Delivery Policy
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:mt-0 mt-5">
              <h3 className="text-[20px] font-bold text-gray-100">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="https://instagram.com/goldenstep_care">
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

export default Footer;
