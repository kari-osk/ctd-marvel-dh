import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { ICharacter } from "utils/types/comics.types";
import CardList from "dh-marvel/components/card";
import { Stack } from "@mui/material";
import { baseURL, hash, ts } from "dh-marvel/services/marvel/marvelApi.service";
import Hero from "dh-marvel/components/hero";

interface IComic {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface IComicsProps {
  comics: IComic[];
  currentPage: number;
  totalPages: number;
  data: ICharacter[];
}

const itemsPerPage = 12;

const Index = ({ comics }: IComicsProps) => {
  return (
    <>
      <Head>
        <title>DH-Marvel</title>
        <meta name="description" content="Loja de quadrilhos DH-Marvel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack spacing={2}>
        <Hero />
        <BodySingle title={"Destaque da semana"}>
          <CardList comics={comics} />
        </BodySingle>
      </Stack>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${baseURL}/comics?ts=${ts}&apikey=${process.env.NEXT_PUBLIC_KEY}&hash=${hash}&limit=12&offset=12`
  );
  const data = await res.json();

  const comics = data.data.results;

  return {
    props: {
      comics,
    },
  };
};
