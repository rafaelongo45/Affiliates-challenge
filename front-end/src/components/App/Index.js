import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

import RenderForm from "../Form/Index.js";
import RenderError from "../../utils/RenderError.js";
import RenderTransactions from "../Transactions/Index.js";
import ErrorContext from "../../contexts/ErrorContext.js";

function App() {
  const [file, setFile] = useState("");
  const [transactions, setTransactions] = useState();
  const [selectedTransaction, setSelectedTransaction] = useState("");
  const [error, setError] = useState({
    code: "",
    hasError: false,
    message: "",
  });
  const baseUrl = process.env.REACT_APP_API_BASEURL;
  useEffect(() => {
    axios
      .get(`${baseUrl}transactions`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) =>
        setError({
          hasError: true,
          message: "Can't connect to database",
          code: err.code,
        })
      );
  }, [file, baseUrl]);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {error.hasError ? <RenderError /> : ""}

      <Main>
        <RenderForm file={file} setFile={setFile} />
        <ButtonsWrapper>
          <Button onClick={() => setSelectedTransaction("Manufacturer")}>
            Manufacturer
          </Button>
          <Button onClick={() => setSelectedTransaction("Affiliates")}>
            Affiliates
          </Button>
        </ButtonsWrapper>

        {transactions ? (
          <RenderTransactions
            selectedTransactions={selectedTransaction}
            transactions={transactions}
          />
        ) : (
          ""
        )}
      </Main>
    </ErrorContext.Provider>
  );
}

export default App;

const Main = styled.main`
  position: relative;
  width: 100vw;
  height: 100%;
  padding-top: 20px;
  min-height: 100vh;
  background-color: #f5efe6;
  box-sizing: border-box;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 20px;
`;

const Button = styled.button`
  border: none;
  border-radius: 6px;
  width: 110px;
  height: 25px;
  background-color: #ffb9b9;
  font-size: 15px;
  color: white;
  font-weight: bold;
`;
