import { render, screen } from "@testing-library/react";

import RenderSales from "./components/Transactions/RenderSales";

const transactionsData = [
  {
    seller: "Kira Yoshikage",
    Transactions: [
      {
        id: 1,
        date: "2022-01-15T19:20:30-03:00",
        product: "KILLER QUEEN",
        sellerId: 1,
        value: 99999,
      },
    ],
  },
];

describe("Sales component", () => {
  test("Should render a sale", () => {
    render(<RenderSales sales={transactionsData} title={"JOJO"} index={0} />);
    const section = screen.getByRole("section");
    expect(section).toBeInTheDocument();
  });
});
