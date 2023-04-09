import { render, screen } from "@testing-library/react";
import ComicInfo from "./[id].page";
import comics from "dh-marvel/test/mocks/comics";


describe("CharacterInfo", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(<ComicInfo props={comics}/>);
      const foo = 1
      const title = screen.getByText("Detalhes do produto");
      expect(title).toBeInTheDocument();
    });
  });
});
