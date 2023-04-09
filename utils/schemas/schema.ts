import * as Yup from "yup";

const cepRegExp = /(^[0-9]{5})-?([0-9]{3}$)/;
const validadeRegExp = /(0[1-9]|10|11|12)[/](20\d{2})/;
const cardNumberRegExp = /[0-9]+\s[0-9]+\s[0-9]+\s[0-9]/;
const cvvRegExp = /^[0-9]{3}$/;

export const schema = Yup.object().shape({
  customer: Yup.object({
    firstName: Yup.string().required("Campo obrigatório"),
    lastName: Yup.string().required("Campo obrigatório"),
    email: Yup.string()
      .email("Formato inválido")
      .required("Digite um e-mail válido"),
      address: Yup.object({
          address1: Yup.string().required("Campo obrigatório"),
          number: Yup.string().required("Campo obrigatório"),
          complement: Yup.string(),
          city: Yup.string().required("Campo obrigatório"),
          state: Yup.string().required("Campo obrigatório"),
          zipCode: Yup.string()
          .matches(cepRegExp, "Número inválido")
          .required("Digite um CEP válido"),
        }),
    }),
  card: Yup.object({
    number: Yup.string()
      .matches(cardNumberRegExp, "Formato inválido")
      .min(19)
      .max(19)
      .required("Campo obrigatório"),
    nameOnCard: Yup.string().required("Campo obrigatório"),
    expDate: Yup.string()
      .matches(validadeRegExp, "Verifique a validade MM/AAAA")
      .min(7, "Mês / Ano")
      .required(),
    cvc: Yup.string().matches(cvvRegExp,"Verifique o código de segurança do cartão").max(3).min(3).required("Campo obrigatório"),
  }),
});

