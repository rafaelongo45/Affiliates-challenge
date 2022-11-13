import RenderSales from "./RenderSales.js";
import separateSales from "../../utils/salesSeparator.js";

function RenderTransactions({ selectedTransactions, transactions }) {
  if (transactions.length !== 0) {
    const transaction = separateSales(transactions);
    const manufacturerSales = transaction.manufacturerSales;
    const affiliatesSales = transaction.affiliatesSales;

    return (
      <>
        {selectedTransactions === "Manufacturer" ? (
          <RenderSales sales={manufacturerSales} title={selectedTransactions} />
        ) : selectedTransactions === "Affiliates" ? (
          <RenderSales sales={affiliatesSales} title={selectedTransactions} />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default RenderTransactions;
