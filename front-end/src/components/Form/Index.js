import { useContext } from "react";
import styled from "styled-components";
import { AiFillFileAdd, AiFillFileText } from "react-icons/ai";

import MessageContext from "../../contexts/MessageContext.js";
import formHandler from "./formSubmitter.js";

function RenderForm({ file, setFile }) {
  const { setMessage } = useContext(MessageContext);

  return (
    <Form role="form">
      <InputWrapper>
        {file ? (
          <>
            <AiFillFileText />
            <p>{file.name}</p>{" "}
          </>
        ) : (
          <>
            <AiFillFileAdd />
            <p>Select a file to upload</p>
          </>
        )}
        <FormInput
          role={"contentInfo"}
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </InputWrapper>
      <FormSubmit
        role={"button"}
        onClick={(e) => formHandler.submitForm(e, file, setFile, setMessage)}
      >
        Submit
      </FormSubmit>
    </Form>
  );
}

export default RenderForm;

const Form = styled.form`
  width: 80%;
  position: relative;
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 20px;
  border: 1px solid grey;
  border-radius: 8px;
  background-color: #efefef;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: auto;
  width: 60%;
  height: 70%;
  border: 1px solid grey;
  border-radius: 12px;
  background-color: white;

  p {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #262626;
    margin-bottom: 15px;
  }

  svg {
    position: absolute;
    top: 15px;
    font-size: 60px;
    color: grey;
  }
`;

const FormInput = styled.input`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  font-size: 0;
  width: 100%;
  height: 100%;
`;

const FormSubmit = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border: 0px;
  border-radius: 12px;
  width: 75px;
  height: 30px;
  background-color: #aebdca;
  font-weight: bold;
  font-size: 15px;
  color: white;
`;
