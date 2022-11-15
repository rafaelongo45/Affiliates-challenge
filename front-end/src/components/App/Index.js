import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

import RenderForm from "../Form/Index.js";
import RenderButton from "./RenderButton.js";
import RenderMessage from "../../utils/MessageManager";
import RenderSales from "../Transactions/RenderSales.js";
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

        {transactions ? (
          <ButtonsWrapper role={"group"}>
            {transactions.map((seller) => {
              const i = transactions.findIndex(
                (obj) => obj.seller === seller.seller
              );

              return (
                <RenderButton
                  key={seller.seller + i}
                  setSelectedTransaction={setSelectedTransaction}
                  name={seller.seller}
                  i={i}
                  selectedTransaction={selectedTransaction}
                />
              );
            })}
          </ButtonsWrapper>
        ) : (
          ""
        )}

        {selectedTransaction !== "" ? (
          <RenderSales
            sales={transactions}
            title={selectedTransaction.nameParsed}
            index={selectedTransaction.i}
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
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  height: fit-content;
  margin-top: 20px;
`;
