import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import { AiFillFileAdd, AiFillFileText } from "react-icons/ai";

import ErrorContext from "../../contexts/ErrorContext.js";

function RenderForm({ file, setFile }) {
  const baseUrl = process.env.REACT_APP_API_BASEURL;
  const { setError } = useContext(ErrorContext);

  function submitForm(e) {
    e.preventDefault();
    if (file === "") {
      setError({
        hasError: true,
        message: "You must select a file before submitting!",
      });
      return;
    }

    const isFileValid = file.name.substr(-3) === "txt";
    if (!isFileValid) {
      setError({
        hasError: true,
        message: "You must send a text file!",
        code: "",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post(`${baseUrl}transactions`, formData)
      .then((res) => {
        alert("file uploaded!");
        setFile("");
      })
      .catch((err) =>
        setError({
          hasError: true,
          message: err.response.data,
          code: "",
        })
      );
  }

  return (
    <Form>
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
        <FormInput type="file" onChange={(e) => setFile(e.target.files[0])} />
      </InputWrapper>
      <FormSubmit onClick={(e) => submitForm(e)}> Submit </FormSubmit>
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
  background-color: #e8dfca;
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
