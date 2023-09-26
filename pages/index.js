import Head from 'next/head'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Arrivals from '../components/arrivals';
import Footer from '../components/footer';
import { useEffect, useState } from "react";
import ShoeCare from '../components/shoeCare';
import Layout from '../components/Layout/Layout';
import MyHead from '../components/Head';
import Banner1 from '../components/Homepage/Banner1';
import Banner2 from '../components/Homepage/Banner2';
import BestSeller from '../components/Homepage/BestSeller';
import Banner3 from '../components/Homepage/Banner3';

export default function Home({ crates, accessories, seller }) {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <>
      <Layout>
        <MyHead title="Goldenstep" description="Welcome to Goldenstep, your go-to sneaker care provider. Shop our range of 13 high-quality sneaker care products, including the All in One Kit, Handy Kit, SPF, Cloud Cleaner, Surface Mat, Microfiber Towels, Soft/Hard Bristle Brushes, Shoe Shaper, and our premium Sneaker Crates in Black Alpha, White Vision, Gray Lava, and Ash. Keep your sneakers looking fresh with Goldenstep." />
        <Hero />
        <Banner1 />
        <Banner3 />
        <BestSeller props={seller} />
        <Banner2 />
        {/* <Arrivals props={crates} />
        <ShoeCare props={accessories} /> */}
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  let crates = null;
  let kit = null;
  let accessories = null;
  let seller = null;

  async function getCrates() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    await fetch("https://backend.goldenstep.in/store/products/?category=1", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        crates = result;
      })
      .catch((error) => console.log("error", error));
  }

  await getCrates();

  async function getAccessories() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    await fetch("https://backend.goldenstep.in/store/products/?category=3", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        accessories = result;
      })
      .catch((error) => console.log("error", error));
  }

  await getAccessories();

  async function getBestSeller() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    await fetch("https://backend.goldenstep.in/store/products/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        seller = result;
      })
      .catch((error) => console.log("error", error));
  }

  await getBestSeller();

  return {
    props: {
      crates,
      kit,
      accessories,
      seller
    },
  };
}
