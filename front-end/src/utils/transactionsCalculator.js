export function calculateValue(transactions) {
  let sum = 0;
  let affiliatesSales = [];
  let manufacturerSales = [];

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const isSum =
      transaction.type === 1 ||
      transaction.type === 2 ||
      transaction.type === 4;

    if (transaction.type === 1) {
      affiliatesSales.push(transaction);
    }

    if (transaction.type === 2) {
      manufacturerSales.push(transaction);
    }

    if (isSum) {
      sum += transaction.value;
    } else {
      sum -= transaction.value;
    }
  }

  return {
    totalSum: sum / 100,
    affiliatesSales,
    manufacturerSales,
  };
}