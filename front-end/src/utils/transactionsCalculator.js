export function calculateValue(transactions) {
  let sum = 0;
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const isSum =
      transaction.type === 1 ||
      transaction.type === 2 ||
      transaction.type === 4;

    if (isSum) {
      sum += transaction.value;
    } else {
      sum -= transaction.value;
    }
  }

  return sum / 100;
}
