import { Container, Grid, Typography, CardMedia, Paper } from "@mui/material";
import { CheckoutContext } from "context/checkout.context";
import Head from "next/head";
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
  const { address} = customer

  return (
    <>
      <Head>
        <title>DH-Marvel | Confirmação da compra</title>
        <meta name="description" content="Confirmação da compra" />
      </Head>
      <Container>
        <Grid container justifyContent={"center"} alignContent={"center"}>
          <Typography
            variant="h1"
            textAlign="center"
            fontSize={24}
            fontWeight="bold"
          >
            Compra realizada com sucesso.
          </Typography>
          <Paper>
            <Typography
              sx={{ marginTop: "20px", paddingTop: "10px" }}
              textAlign="center"
              fontSize={22}
              fontWeight="bold"
            >
              Detalhes da compra
            </Typography>
            <Container
              sx={{ display: "flex", flexWrap: "wrap", padding: "20px" }}
            >
              <Container sx={{ width: "auto", marginBottom: "10px" }}>
                <Typography textAlign="center" variant="h2" fontWeight="bold">
                  Produto:
                </Typography>
                <CardMedia
                  component="img"
                  sx={{ width: "250px", margin: "0 auto" }}
                  src={order.image}
                />
                <Typography variant="h3" textAlign="center">
                  Título:
                  {order.name}
                </Typography>
                <Typography variant="h3" textAlign="center">
                  Preço:
                  {order.price}
                </Typography>
              </Container>
              <Container>
                <Typography variant="h2" fontWeight="bold">
                  Dados de entrega:
                </Typography>
                <Typography variant="h3">
                  Nome:
                  {customer.firstName}
                </Typography>
                <Typography variant="h3">
                  Sobrenome: 
                  {customer.lastName}
                </Typography>
                <Typography variant="h3">
                  Endereço de entrega:
                  {address.address1},
                  {!!address.address1
                    ? `, ${address.number}, ${address.city}/${address.state}`
                    : ""}
                </Typography>
              </Container>
            </Container>
          </Paper>
        </Grid>
      </Container>
    </>
  );
}
