import styled from "styled-components";
import { calculateValue } from "../../utils/transactionsCalculator";
import RenderTransaction from "./RenderTransaction";

function RenderSales({ sales, title, index }) {
  const sum = calculateValue(sales[index].Transactions);
  const totalValue = sum.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
  return (
    <SalesComponent role={"section"}>
      <Title role={"title"}>{title}'s Transactions</Title>
      <SalesWrapper>
        {sales[index].Transactions.map((transaction) => {
          return (
            <RenderTransaction transaction={transaction} key={transaction.id} />
          );
        })}
      </SalesWrapper>
      <Value>
        <span>Total Value:</span> {totalValue}
      </Value>
    </SalesComponent>
  );
}

export default RenderSales;

const SalesComponent = styled.section``;

const SalesWrapper = styled.div`
  width: 80%;
  max-width: 500px;
  margin: 10px auto 0 auto;
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
  margin: -10px auto;
  padding-top: 20px;
  border-right: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  border-radius: 0 0 8px 8px;
  height: 30px;
  width: 80%;
  max-width: 500px;

  span {
    font-weight: bold;
    padding: 5px;
  }
`;
