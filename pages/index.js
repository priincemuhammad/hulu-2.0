import Head from "next/head";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import requests from "@/utils/requests";

const Home = ({ results }) => {
  return (
    <>
      {/* header */}
      <Header />
      {/* navbar */}
      <Navbar />
      {/* results */}
      <Results results={results} />
    </>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
