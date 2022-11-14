import { useContext } from "react";
import styled from "styled-components";

import MessageContext from "../contexts/MessageContext.js";

function RenderMessage() {
  const { message, setMessage } = useContext(MessageContext);
  setTimeout(
    () =>
      setMessage({
        hasMessage: false,
        message: "",
        code: "",
      }),
    5000
  );
  return (
    <ErrorWrapper role={"error"}>
      <Message>{message.message}</Message>
    </ErrorWrapper>
  );
}

export default RenderMessage;

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 0;
  min-height: 40px;
  width: 300px;
  background-color: whitesmoke;
  border-radius: 8px;
  border: 1px solid grey;
  z-index: 2;
`;

const Message = styled.p`
  font-weight: bold;
  text-align: start;
  margin: 5px;
  font-size: 14 px;
`;
