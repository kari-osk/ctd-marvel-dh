import { render, screen } from "@testing-library/react";
import FaqAccordion from "./faq.page";


describe("FaqAccordion", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(<FaqAccordion />);
      const title = screen.getByText("Perguntas frequentes");
      expect(title).toBeInTheDocument();
    });
    
  });
});


