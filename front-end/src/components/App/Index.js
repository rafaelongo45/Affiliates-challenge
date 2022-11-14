import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

import RenderForm from "../Form/Index.js";
import RenderMessage from "../../utils/MessageManager";
import RenderTransactions from "../Transactions/Index.js";
import MessageContext from "../../contexts/MessageContext.js";

function App() {
  const [file, setFile] = useState("");
  const [transactions, setTransactions] = useState();
  const [selectedTransaction, setSelectedTransaction] = useState("");
  const [message, setMessage] = useState({
    code: "",
    hasMessage: false,
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
        setMessage({
          hasMessage: true,
          message: "Can't connect to database",
          code: err.code,
        })
      );
  }, [file, baseUrl]);

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {message.hasMessage ? <RenderMessage /> : ""}

      <Main>
        <RenderForm file={file} setFile={setFile} />
        <ButtonsWrapper role={"group"}>
          <Button
            role={"button"}
            onClick={() => setSelectedTransaction("Manufacturer")}
          >
            Manufacturer
          </Button>
          <Button
            role={"button"}
            onClick={() => setSelectedTransaction("Affiliates")}
          >
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
    </MessageContext.Provider>
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
  cursor: pointer;
  border: none;
  border-radius: 6px;
  width: 110px;
  height: 25px;
  background-color: #a4a4a4;
  font-size: 15px;
  color: white;
  font-weight: bold;
`;
