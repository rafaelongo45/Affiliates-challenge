import styled from "styled-components";
import { calculateValue } from "../../utils/transactionsCalculator";
import RenderTransaction from "./RenderTransaction";

function RenderSales({ sales, title }) {
  const transaction = calculateValue(sales);
  const totalValue = transaction.totalSum.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
  return (
    <>
      <Title>{title} Sales</Title>
      <SalesWrapper>
        {sales.map((transaction) => {
          return (
            <RenderTransaction
              transaction={transaction}
              key={transaction.date + transaction.seller}
            />
          );
        })}
      </SalesWrapper>
      <Value>
        <span>Total Value:</span> {totalValue}
      </Value>
    </>
  );
}

export default RenderSales;

const SalesWrapper = styled.div`
  width: 80%;
  max-width: 500px;
  margin: 10px auto;
  max-height: 450px;
  overflow-y: scroll;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

const Title = styled.p`
  margin: 15px auto 0 auto;
  width: 80%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const Value = styled.p`
  margin: 0 auto;
  width: 80%;
  max-width: 500px;

  span {
    font-weight: bold;
  }
`;
