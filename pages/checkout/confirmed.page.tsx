import { Container, Grid, Typography, CardMedia, Paper } from "@mui/material";
import { CheckoutContext } from "context/checkout.context";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";

export default function Confirmed() {
  const { checkout } = useContext(CheckoutContext);

  if (!checkout) {
    return (
      <Grid container justifyContent={"center"} alignContent={"center"}>
        <Typography variant="h3">
          Erro ao finalizar a compra. Tente novamente.
        </Typography>
      </Grid>
    );
  }

  const { customer, order } = checkout;
  const { address } = customer;

  return (
    <>
      <Head>
        <title>DH-Marvel | Confirmação da compra</title>
        <meta name="description" content="Confirmação da compra" />
      </Head>
      <Container>
        <Typography variant="h1" sx={{ paddingY: "3rem", textAlign: "center" }}>
          Compra realizada com sucesso
        </Typography>
        <Paper>
          <Grid
            container
            sx={{
              padding: "2rem",
              marginTop: "1rem",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Grid item xs={12} sm={12} md={8}>
              <Typography variant="h2" paddingBottom={"1rem"} fontWeight="bold">
                Detalhes da compra
              </Typography>
              <Typography variant="h3" paddingBottom={"1rem"} fontWeight="bold">
                Produto
              </Typography>
              <Typography variant="h4" paddingY={"0.3rem"}>
                <strong>Título: </strong>
                {order.name}
              </Typography>
              <Typography variant="h4" paddingY={"0.3rem"}>
                <strong>Preço: </strong>
                {order.price}
              </Typography>
              <Typography variant="h3" fontWeight="bold" paddingY={"1rem"}>
                Dados de entrega:
              </Typography>
              <Typography variant="h4" paddingY={"0.3rem"}>
                <strong>Nome: </strong>
                {customer.firstName} {customer.lastName}
              </Typography>
              <Typography variant="h4" paddingY={"0.3rem"}>
                <strong>Endereço: </strong>
                {address.address1}, {address.number}, {address.city} /{" "}
                {address.state}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <CardMedia
                component="img"
                sx={{ width: "250px", margin: "0 auto" }}
                src={order.image}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
