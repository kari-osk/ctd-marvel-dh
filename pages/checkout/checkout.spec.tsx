import { render, screen } from "@testing-library/react";
import Checkout from "./[id].page";
import { checkoutMock } from "dh-marvel/test/mocks/checkout";
import userEvent from "@testing-library/user-event";
import { server } from "dh-marvel/test/server";


async function Form() {
  const inputName = screen.getByRole("textbox", {name: "Nome"});
  const inputLastName = screen.getByRole("textbox", {name: "Sobrenome"});
  const inputEmail = screen.getByRole("textbox", {name: "Email"});
  const inputAddress = screen.getByRole("textbox", {name: "Endereço"});
  const inputNumber = screen.getByRole("textbox", {name: "Número"});
  const inputCity = screen.getByRole("textbox", {name: "Cidade"});
  const inputState = screen.getByRole("textbox", {name: "Estado"});
  const inputZipCode = screen.getByRole("textbox", {name: "CEP"});
  const inputCardNumber = screen.getByRole("textbox", {name: "Número do cartão"});
  const inputNameOnCard = screen.getByRole("textbox", {name: "Nome no cartão"});
  const inputExpDate = screen.getByRole("textbox", {name: "Validade mês/ano"});
  const inputCvc = screen.getByRole("textbox", {name: "Código de segurança"});

  await userEvent.type(inputName, "Mari")
  await userEvent.type(inputLastName, "Oliveira")
  await userEvent.type(inputEmail, "mari@gmail.com")
  await userEvent.type(inputAddress,"Av.Brasil")
  await userEvent.type(inputNumber, "1245")
  await userEvent.type(inputCity, "São Paulo")
  await userEvent.type(inputState, "SP")
  await userEvent.type(inputZipCode,"12345678")
  await userEvent.type(inputCardNumber, "4242 4242 4242 4242")
  await userEvent.type(inputNameOnCard,"Mari Oliveira")
  await userEvent.type(inputExpDate, "01/2028")
  await userEvent.type(inputCvc, "123")
}

beforeAll(() => server.listen())
afterAll(() => server.close())

describe("Checkout", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(<Checkout comic={checkoutMock}/>);
      const title = screen.getByText("Preencha o formulário para finalizar a compra");
      expect(title).toBeInTheDocument();
    });

    it("should render the selected product", () => {
      render(<Checkout comic={checkoutMock}/>);
      const title = screen.getByText(/Gun Theory/i)
      expect(name).toBeInTheDocument();
    })

    it("should render validation message", async () => {
      render(<Checkout comic={checkoutMock}/>);
      const btn = screen.getByRole("button")
      await userEvent.click(btn);
      const errorMessage = await screen.findAllByText("Campo obrigatório")
      expect(errorMessage[0]).toBeInTheDocument()
    })
    
  });
});
