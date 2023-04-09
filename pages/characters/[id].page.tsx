import { getCharacter } from "dh-marvel/services/marvel/marvel.service";
import Head from "next/head";
import { useRouter } from "next/router";
import { ICharacter } from "utils/types/comics.types";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

type PropsDetails = {
  data: ICharacter;
};

export default function CharacterInfo({ data }: PropsDetails) {
  const { back } = useRouter();
  const character = data;


  return (
    <>
      <Head>
        <title>DH-Marvel</title>
        <meta name="description" content="Detalhe sobre o personagem" />
      </Head>
      <Container>
        <Button
          sx={{ my: 2 }}
          variant="outlined"
          size="small"
          startIcon={<NavigateBeforeIcon />}
          onClick={back}
        >
          Voltar para a página anterior
        </Button>
        <Grid container sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <Grid item xs={12} sm={12} md={6} sx={{ paddingBottom: "1rem" }}>
            {character.thumbnail ? (
              <Image
                src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
                alt={character.name}
                width={500}
                height={500}
              />
            ) : (
              <Typography>Imagem indisponível</Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h1">Detalhes do personagem</Typography>
            <Typography variant="h2" sx={{ paddingTop: "1rem" }}>Nome: {character.name}</Typography>
            {character.description ? (
              <Typography paragraph={true} sx={{ paddingY: "1rem" }}>
                {character.description}
              </Typography>
            ) : (
              <Typography paragraph={true} sx={{ paddingY: "1rem" }}>
                Descrição do personagem indisponível.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1009176" } }],
    fallback: true,
  };
};

export async function getStaticProps({ params }: any) {
  const data = await getCharacter(Number(params.id));

  return {
    props: {
      data,
    },
  };
}
