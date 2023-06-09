import React from "react";
import { Movie } from "../../interface";
import Head from "next/head";
import Body from "../components/Body";
import Poster from "../components/Poster";
import GridRow from "../components/GridRow";
import { v4 } from "uuid";
import { getUpcoming } from "./api/movie";

interface IProps {
  upcomingMovies: Movie[];
}

const ComingSoon = ({ upcomingMovies }: IProps) => {
  return (
    <main>
      <Head>
        <title>Upcoming movies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <h1 className="text-3xl font-bold text-white">Upcoming movies</h1>
        <GridRow>
          {upcomingMovies?.map((movie) => (
            <Poster key={v4()} size="normal" type="movie" movie={movie} />
          ))}
        </GridRow>
      </Body>
    </main>
  );
};

export const getServerSideProps = async () => {
  const upcomingMovies = await getUpcoming();
  console.log(upcomingMovies);
  return {
    props: {
      upcomingMovies: upcomingMovies || null,
    },
  };
};

export default ComingSoon;
