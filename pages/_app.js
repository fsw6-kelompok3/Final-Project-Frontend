import React from "react";
import Head from "next/head";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
      <ToastContainer autoClose={5000}/>
    </>
  );
}

export default MyApp;
