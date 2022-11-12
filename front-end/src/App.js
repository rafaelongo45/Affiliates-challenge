import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [file, setFile] = useState("");
  const [transactions, setTransactions] = useState();
  const baseUrl = process.env.REACT_APP_API_BASEURL;
  let totalValue = 0;
  let manufacturerSales;
  let affiliatesSales;

  function submitForm(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    axios.post(`${baseUrl}transactions`, formData).then((res) => {
      alert("file uploaded!");
    });
  }

  if (transactions) {
    const transaction = calculateValue(transactions);
    manufacturerSales = transaction.manufacturerSales;
    affiliatesSales = transaction.affiliatesSales;
    totalValue = transaction.totalSum.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
    });
  }

  useEffect(() => {
    axios
      .get(`${baseUrl}transactions`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => console.log(err));
  }, [baseUrl]);

  console.log(transactions);
  return (
    <>
      <form>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={(e) => submitForm(e)}> Submit </button>
      </form>
      {transactions ? (
        <>
          <h2>Manufacturer</h2>
          {manufacturerSales.map((transaction) => {
            return (
              <>
                <p>Date: {transaction.date}</p>
                <p>Seller: {transaction.seller}</p>
                <p>Description: {transaction.description}</p>
                <p>
                  Value:
                  {(transaction.value / 100).toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </>
            );
          })}
          <h2>Affiliate</h2>
          {affiliatesSales.map((transaction) => {
            return (
              <>
                <p>Date: {transaction.date}</p>
                <p>Seller: {transaction.seller}</p>
                <p>Description: {transaction.description}</p>
                <p>
                  Value:
                  {(transaction.value / 100).toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </>
            );
          })}
          <h3>Total Value: {totalValue}</h3>{" "}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default App;

function calculateValue(transactions) {
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
