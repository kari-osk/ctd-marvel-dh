import { render, screen } from "@testing-library/react";
import Confirmed from "./confirmed.page";



describe("Confirmed", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(<Confirmed />);
      const foo = 1
      const title = screen.getByText("Compra realizada com sucesso");
      expect(title).toBeInTheDocument();
    });
  });
});
