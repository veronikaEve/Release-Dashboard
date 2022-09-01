import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../utils/test-utils/test-utils";

import Header from "./header";

describe("Header", () => {
  test("should render the header", () => {
    renderWithRouter(<Header />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  test("Navbar brand should have link to the home page", () => {
    renderWithRouter(<Header />);

    const navbarBrand = screen.getByTestId("navbar-brand");
    expect(navbarBrand).toHaveAttribute("href", "/home");
  });

  test("should have the login info", () => {
    renderWithRouter(<Header />);

    const loginInfo = screen.getByTestId("login-info");
    expect(loginInfo).toBeInTheDocument();
  });

  test("should have sign in/out button", () => {
    renderWithRouter(<Header />);

    const signInOutButton = screen.getByTestId("sign-in-out-button");
    expect(signInOutButton).toBeInTheDocument();
  });
});
