import { render, screen } from "@testing-library/react";
import CharacterInfo from "./[id].page";

describe("CharacterInfo", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(<CharacterInfo />);
      const foo = 1
      const title = screen.getByText("Detalhes do personagem");
      expect(title).toBeInTheDocument();
    });
  });
});
