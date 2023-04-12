import Head from 'next/head'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Arrivals from '../components/arrivals';
import Footer from '../components/footer';
import { useEffect, useState } from "react";
import ShoeCare from '../components/shoeCare';
import Layout from '../components/Layout/Layout';

export default function Home({ crates, accessories }) {
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
      <Head>
        <title>Golden Step</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Arrivals props={crates} />
        <ShoeCare props={accessories} />
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  let crates = null;
  let kit = null;
  let accessories = null;

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

  return {
    props: {
      crates,
      kit,
      accessories
    },
  };
}
