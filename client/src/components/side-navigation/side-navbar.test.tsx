import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../utils/test-utils/test-utils";

import SideNav from "./side-navbar";

describe("SideNav", () => {
  test("should have the navbar", () => {
    renderWithRouter(<SideNav />);
    const navbar = screen.getByTestId("side-navbar");
    expect(navbar).toBeInTheDocument();
  });

  test("should have link to the Home page", () => {
    renderWithRouter(<SideNav />);

    const homeNavLink = screen.getByTestId("home-nav");
    expect(homeNavLink).toHaveAttribute("href", "/home");
    expect(homeNavLink).toHaveTextContent("Home");
  });

  test("should have link to the New Release page", () => {
    renderWithRouter(<SideNav />);

    const newReleaseNavLink = screen.getByTestId("new-release-nav");
    expect(newReleaseNavLink).toHaveAttribute("href", "/new-release");
    expect(newReleaseNavLink).toHaveTextContent("New Release");
  });

  test("should have link to the About page", () => {
    renderWithRouter(<SideNav />);

    const aboutNavLink = screen.getByTestId("about-nav");
    expect(aboutNavLink).toHaveAttribute("href", "/about");
    expect(aboutNavLink).toHaveTextContent("About");
  });
});
