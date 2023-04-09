import { render, screen } from "@testing-library/react";
import ComicInfo from "./[id].page";


describe("CharacterInfo", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(<ComicInfo />);
      const foo = 1
      const title = screen.getByText("Detalhes do produto");
      expect(title).toBeInTheDocument();
    });
  });
});
