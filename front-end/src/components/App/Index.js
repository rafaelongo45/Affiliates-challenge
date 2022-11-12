import axios from "axios";
import { useEffect, useState } from "react";

import RenderForm from "../Form/Index";
import RenderTransactions from "../Transactions/Index";

function App() {
  const [file, setFile] = useState("");
  const [transactions, setTransactions] = useState();
  const baseUrl = process.env.REACT_APP_API_BASEURL;
  console.log(transactions);
  useEffect(() => {
    axios
      .get(`${baseUrl}transactions`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => console.log(err));
  }, [file]);

  return (
    <>
      <RenderForm file={file} setFile={setFile} />
      {transactions ? <RenderTransactions transactions={transactions} /> : ""}
    </>
  );
}

export default App;
