import { render, screen } from "@testing-library/react";
import Checkout from "./[id].page";

describe("Checkout", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(<Checkout />);
      const title = screen.getByText("Preencha o formulário para finalizar a compra");
      expect(title).toBeInTheDocument();
    });
    
  });
});
