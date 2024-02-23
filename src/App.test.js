import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Router } from "react-router-dom";
import App from "./App";
import BookingForm from "./components/BookingForm";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Booking from "./pages/Booking";

test("Renders Reservation", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const element = screen.getByText("Reservation");
  expect(element).toBeInTheDocument();

  const reserveButton = screen.getByText("Reserve a Table");
  fireEvent.click(reserveButton);
});

