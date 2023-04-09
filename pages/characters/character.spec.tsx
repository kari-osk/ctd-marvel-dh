import { render, screen } from "@testing-library/react";
import CharacterInfo from "./[id].page";
import character from "dh-marvel/test/mocks/character";

describe("CharacterInfo", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(<CharacterInfo data={character}/>);
      const title = screen.getByText("Detalhes do personagem");
      expect(title).toBeInTheDocument();
    });
  });
});
