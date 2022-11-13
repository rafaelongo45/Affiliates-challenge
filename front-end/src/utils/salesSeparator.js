function separateSales(transactions) {
  let affiliatesSales = [];
  let manufacturerSales = [];

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    if (transaction.type === 1) {
      affiliatesSales.push(transaction);
    }

    if (transaction.type === 2) {
      manufacturerSales.push(transaction);
    }
  }

  return {
    affiliatesSales,
    manufacturerSales,
  };
}

export default separateSales;
