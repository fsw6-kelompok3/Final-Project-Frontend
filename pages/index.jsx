import Head from "next/head";
import Image from "next/image";
import Layout from "../components/general/Layout";
import HomeBanner from "../components/home/HomeBanner";
import ListProduct from "../components/home/ListProduct";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Layout>
        <HomeBanner />
        <ListProduct />
      </Layout>
    </>

  );
}
