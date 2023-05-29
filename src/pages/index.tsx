import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
    </>
  );
};

export default Home;
