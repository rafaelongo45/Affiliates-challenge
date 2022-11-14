import styled from "styled-components";

import RenderSales from "./RenderSales.js";
import separateSales from "../../utils/salesSeparator.js";

function RenderTransactions({ selectedTransactions, transactions }) {
  const transaction = separateSales(transactions);
  const manufacturerSales = transaction.manufacturerSales;
  const affiliatesSales = transaction.affiliatesSales;

  return (
    <Wrapper role={"contentInfo"}>
      {selectedTransactions === "Manufacturer" ? (
        <RenderSales sales={manufacturerSales} title={selectedTransactions} />
      ) : selectedTransactions === "Affiliates" ? (
        <RenderSales sales={affiliatesSales} title={selectedTransactions} />
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default RenderTransactions;

const Wrapper = styled.div``;
