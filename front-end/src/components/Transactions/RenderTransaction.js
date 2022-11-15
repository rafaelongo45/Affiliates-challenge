import styled from "styled-components";

function RenderTransaction({ transaction }) {
  const product =
    transaction.product[0] + transaction.product.slice(1).toLowerCase();
  const value = (transaction.value / 100).toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
  const date =
    transaction.date.slice(8, 10) +
    "/" +
    transaction.date.slice(5, 7) +
    "/" +
    transaction.date.slice(2, 4) +
    " ";

  const hour = transaction.date.slice(11, 16) + "h";
  return (
    <Sale role={"article"}>
      <p>
        {product} - {date} {hour}
      </p>
      <Separator />
      <p>Value: {transaction.type === 3 ? "-" : "+"}R$ {value}</p>
    </Sale>
  );
}

export default RenderTransaction;

const Sale = styled.article`
  margin: 10px 0 5px 8px;

  p {
    margin-top: 1px;
  }
`;

const Separator = styled.div`
  margin: 1px 0 5px 0;
  height: 1px;
  width: 90%;
  background-color: grey;
`;
