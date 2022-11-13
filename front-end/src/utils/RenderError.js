import { useContext } from "react";
import styled from "styled-components";

import ErrorContext from "../contexts/ErrorContext.js";

function RenderError() {
  const { error, setError } = useContext(ErrorContext);
  setTimeout(
    () =>
      setError({
        hasError: false,
        message: "",
        code:''
      }),
    3000
  );
  return (
    <ErrorWrapper>
      <Message>{error.message}</Message>
    </ErrorWrapper>
  );
}

export default RenderError;

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
