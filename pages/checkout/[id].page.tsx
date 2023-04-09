import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { GetServerSideProps, NextPage } from "next";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  FormControl,
  TextField,
  Paper,
  CardMedia,
  Snackbar,
  Alert,
} from "@mui/material";

import { schema } from "utils/schemas/schema";
import { ComicType } from "utils/types/comics.types";

import { useContext, useState } from "react";

import { CheckoutContext } from "context/checkout.context";
import axios from "axios";
import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";

type ComicPropType = {
  comic: ComicType;
};

interface Inputs extends CheckoutInput {}

const Checkout: NextPage<ComicPropType> = ({ comic }: ComicPropType) => {
  const { back } = useRouter();

  // const methods = useForm<FormType>({ resolver: yupResolver(schema) });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const { handleCheckout } = useContext(CheckoutContext);

  const onSubmit = async (data: CheckoutInput) => {
    const payload = {
      ...data,
      card: { ...data.card, number: data.card.number.replace(" ", "") },
      order: {
        name: comic.title,
        image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        price: comic.price,
      },
    };

    await axios
      .post("http://localhost:3000/api/checkout", payload)
      .then((response) => {
        handleCheckout(response.data.data);
        router.push('checkout/confirmed');
      })
      .catch((err) => {
        setOpen(true);
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <>
      <Head>
        <title>DH-Marvel | Checkout</title>
        <meta name="description" content="Formulário para finalizar a compra" />
      </Head>
      <Container sx={{ marginTop: "30px" }}>
        <Button
          sx={{ my: 2 }}
          variant="outlined"
          size="small"
          startIcon={<NavigateBeforeIcon />}
          onClick={back}
        >
          Voltar para a página anterior
        </Button>
        <Typography variant="h1" sx={{ paddingY: "2rem" }}>
          Preencha o formulário para finalizar a compra
        </Typography>
        <Grid
          container
          sx={{
            paddingBottom: "1rem",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
          >
            <FormControl
              noValidate
              component={"form"}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Box border={1} padding={3} marginBottom={3}>
                <Typography variant="h2" sx={{ paddingBottom: "2rem" }}>
                  Dados pessoais
                </Typography>
                <Grid
                  container
                  spacing={2}
                  sx={{ flexDirection: { xs: "column", md: "row" } }}
                >
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      {...register("customer.firstName")}
                      label="Nome"
                      type="text"
                      error={!!errors.customer?.firstName}
                      required
                      sx={{width: "100%"}}
                    />
                    {!!errors.customer?.firstName && (
                      <Typography
                        color="red"
                        gutterBottom
                        noWrap
                        variant="body1"
                        component="div"
                      >
                        {`${errors.customer?.firstName.message}`}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      {...register("customer.lastName")}
                      label="Sobrenome"
                      type="text"
                      error={!!errors.customer?.lastName}
                      required
                      sx={{width: "100%"}}
                    />
                    {!!errors.customer?.lastName && (
                      <Typography
                        color="red"
                        gutterBottom
                        noWrap
                        variant="body1"
                        component="div"
                      >
                        {`${errors.customer?.lastName.message}`}
                      </Typography>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      {...register("customer.email")}
                      label="E-mail"
                      type="email"
                      error={!!errors.customer?.email}
                      required
                      sx={{width: "100%"}}
                    />
                    {!!errors.customer?.email && (
                      <Typography
                        color="red"
                        gutterBottom
                        noWrap
                        variant="body1"
                        component="div"
                      >
                        {`${errors.customer?.email.message}`}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
             
                <Typography variant="h2" sx={{ paddingY: "1rem" }}>
                  Endereço
                </Typography>
        
                <Grid
                  container
                  spacing={2}
                  sx={{ flexDirection: { xs: "column", md: "row" } }}
                >
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      {...register("customer.address.address1")}
                      label="Endereço"
                      type="text"
                      error={!!errors.customer?.address?.address1}
                      required
                      sx={{width: "100%"}}
                    />
                    {!!errors.customer?.address?.address1 && (
                      <Typography
                        color="red"
                        gutterBottom
                        noWrap
                        variant="body1"
                        component="div"
                      >
                        {`${errors.customer?.address?.address1.message}`}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      {...register("customer.address.number")}
                      label="Número"
                      type="text"
                      error={!!errors.customer?.address?.number}
                      required
                      sx={{width: "100%"}}
                    />
                    {!!errors.customer?.address?.number && (
                      <Typography
                        color="red"
                        gutterBottom
                        noWrap
                        variant="body1"
                        component="div"
                      >
                        {`${errors.customer?.address?.number.message}`}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      {...register("customer.address.complement")}
                      label="Complemento"
                      type="text"
                      error={!!errors.customer?.address?.complement}
                      sx={{width: "100%"}}
                    />
                      {!!errors.customer?.address?.complement && (
                      <Typography
                        color="red"
                        gutterBottom
                        noWrap
                        variant="body1"
                        component="div"
                      >
                        {`${errors.customer?.address?.complement.message}`}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      {...register("customer.address.city")}
                      label="Cidade"
                      type="text"
                      error={!!errors.customer?.address?.city}
                      required
                      sx={{width: "100%"}}
                    />
                    {!!errors.customer?.address?.city && (
                      <Typography
                        color="red"
                        gutterBottom
                        noWrap
                        variant="body1"
                        component="div"
                      >
                        {`${errors.customer?.address?.city.message}`}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      {...register("customer.address.state")}
                      label="Estado"
                      type="text"
                      error={!!errors.customer?.address?.state}
                      required
                      sx={{width: "100%"}}
                    />
                    {!!errors.customer?.address?.state && (
                      <Typography
                        color="red"
                        gutterBottom
                        noWrap
                        variant="body1"
                        component="div"
                      >
                        {`${errors.customer?.address?.state.message}`}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                    {...register("customer.address.zipCode")}
                      label="CEP"
                      type="text"
                      error={!!errors.customer?.address?.zipCode}
                      required
                      sx={{width: "100%"}}
                    />
                    {!!errors.customer?.address?.zipCode && (
                      <Typography
                        color="red"
                        gutterBottom
                        noWrap
                        variant="body1"
                        component="div"
                        sx={{width: "100%"}}
                      >
                        {`${errors.customer?.address?.zipCode.message}`}
                      </Typography>
                    )}
                    </Grid>
                </Grid> 
              </Box>

              <Box border={1} padding={3} marginBottom={3}>
                <Typography variant="h2" sx={{ paddingBottom: "2rem" }}>
                  Dados de pagamento
                </Typography>
                <Grid
                  container
                  spacing={2}
                  sx={{ flexDirection: { xs: "column", md: "row" } }}
                >
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      {...register("card.number")}
                      label="Número do cartão"
                      inputProps={{ maxLength: 19 }}
                      type="tel"
                      inputMode="numeric"
                      error={!!errors.card?.number}
                      required
                      sx={{width: "100%"}}
                    />
                    {!!errors.card?.number && (
                      <Typography
                        color="red"
                        gutterBottom
                        noWrap
                        variant="body1"
                        component="div"
                      >
                        {`${errors.card.number.message}`}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      {...register("card.nameOnCard")}
                      label="Nome no cartão"
                      type="text"
                      error={!!errors.card?.nameOnCard}
                      required
                      sx={{width: "100%"}}
                    />
                    {!!errors.card?.nameOnCard && (
                      <Typography
                        color="red"
                        gutterBottom
                        noWrap
                        variant="body1"
                        component="div"
                      >
                        {`${errors.card?.nameOnCard?.message}`}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      {...register("card.expDate")}
                      label="Validade mês/ano"
                      type="text"
                      error={!!errors.card?.expDate}
                      required
                      sx={{width: "100%"}}
                    />
                    {!!errors.card?.expDate && (
                      <Typography
                        color="red"
                        gutterBottom
                        noWrap
                        variant="body1"
                        component="div"
                      >
                        {`${errors.card?.expDate?.message}`}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      {...register("card.cvc")}
                      inputProps={{ maxLength: 3, "data-testid": "cvv" }}
                      label="Código de segurança"
                      type="password"
                      error={!!errors.card?.cvc}
                      required
                      sx={{width: "100%"}}
                    />
                    {!!errors.card?.cvc && (
                      <Typography
                        color="red"
                        gutterBottom
                        noWrap
                        variant="body1"
                        component="div"
                      >
                        {`${errors.card?.cvc?.message}`}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Box>

              <Button type="submit" color="primary" variant="contained" sx={{width: "100%"}}>
                Confirmar
              </Button>

            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Box sx={{ padding: "2rem" }}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                Produto selecionado:
              </Typography>
              <Typography variant="h4" sx={{ paddingY: "1rem" }}>
                Título: {comic.title}
              </Typography>
              <Typography variant="h4" sx={{ paddingBottom: "1rem" }}>
                Preço: R$ {comic.price}
              </Typography>
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
                width={220}
              />
            </Box>
          </Grid>
        </Grid>

      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        key={1}
        data-testid="alert-error"
        onClose={() => setOpen(false)}
      >
        <div>
          <Alert severity="error">{errorMessage}</Alert>
        </div>
      </Snackbar>
    </>
  );
};

export default Checkout;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const comic = await getComic(Number(id));

  return {
    props: { comic },
  };
};

