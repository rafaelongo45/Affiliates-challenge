import { render, screen } from "@testing-library/react";

import RenderSales from "./components/Transactions/RenderSales";

const sales = [
  {
    date: "2022-01-15T19:20:30-03:00",
    product: "KILLER QUEEN",
    seller: "Kira Yoshikage",
    value: 99999,
  },
  {
    date: "2022-01-15T19:23:30-03:00",
    product: "The world",
    seller: "Dio",
    value: 99999,
  },
];

describe("Sales component", () => {
  test("Should render a sale", () => {
    render(<RenderSales sales={sales} title={"JOJO"} />);
    const section = screen.getByRole("section");
    expect(section).toBeInTheDocument();
  });
});
