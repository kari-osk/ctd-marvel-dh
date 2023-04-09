import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ComicsPropsType } from "utils/types/comics.types";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import Head from "next/head";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Image from "next/image";


export default function ComicInfo(props: ComicsPropsType) {
  const data = props;
  const comics = data?.data;

  const { back } = useRouter();
  return (
    <>
      <Head>
        <title>DH-Marvel</title>
        <meta name="description" content="Detalhe sobre o quadrinho" />
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
        { comics ?
        <Grid
          container
          rowSpacing={4}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Image
              src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              alt={comics.title}
              width={500}
              height={750}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box sx={{ padding: "1rem" }}>
              <Typography variant="h1">{comics.title}</Typography>
              <Typography paragraph={true} sx={{ paddingTop: "1rem" }}>
                {comics.description}
              </Typography>
              {comics.stock > 0 ? (
                <>
                  <Typography variant="h2" sx={{ paddingY: "1rem" }}>
                    R$ {comics.price}
                  </Typography>
                  <Button variant="contained">
                    <Link
                      href={`/checkout/${comics.id}`}
                      style={{ textDecoration: "none", color: "#FFF" }}
                    >
                      Comprar agora
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Typography
                    color="red[900]"
                    variant="h3"
                    sx={{ color: "#A52A2A", paddingBottom: "1rem" }}
                  >
                    Produto indisponível
                  </Typography>

                  {/* <Button
                    variant="contained"
                    disabled
                    sx={{ marginRight: "1rem" }}
                  >
                    Buy
                  </Button> */}
                  <Button variant="contained">
                    <Link href={"/"}>Veja outros produtos</Link>
                  </Button>
                </>
              )}
            </Box>

            <Box sx={{ padding: "1rem" }}>
              <Typography variant="h2" sx={{ paddingY: "1rem" }}>
                Personagens da história
              </Typography>

              {!comics.characters.items ||
              comics.characters.items.length === 0 ? (
                <Typography paragraph={true}>
                  Informação indisponível
                </Typography>
              ) : (
                comics.characters.items.map((item) => (
                  <>
                    <li>
                      <Link
                        href={`/characters/${item.resourceURI
                          .split("characters/")
                          .pop()}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  </>
                ))
              )}
            </Box>
          </Grid>
        </Grid>
         : <Typography variant="h2">Erro ao carregar a página. Tente novamente</Typography>}
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "10200" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const data = await getComic(Number(params.id));
  

  return {
    props: {
      data,
    },
  };
};
