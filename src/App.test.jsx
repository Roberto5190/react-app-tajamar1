import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App Component", () => {
    it("Debe renderizar el texto 'Edit'", () => {
        // Renderiza el componente App
        render(<App />);
        expect(screen.getByText("Edit")).toBeDefined();
    });
})
