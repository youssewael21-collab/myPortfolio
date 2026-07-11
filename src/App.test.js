import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("toggles the theme from dark to light", () => {
  const { container } = render(<App />);

  const toggleButton = screen.getByRole("button", { name: /تبديل الثيم/i });
  const appShell = container.querySelector(".app-shell");

  expect(appShell.classList.contains("theme-dark")).toBe(true);

  fireEvent.click(toggleButton);

  expect(appShell.classList.contains("theme-light")).toBe(true);
});
