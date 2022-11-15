import axios from "axios";

function submitForm(e, file, setFile, setMessage) {
  e.preventDefault();
  const baseUrl = process.env.REACT_APP_API_BASEURL;

  if (file === "") {
    setMessage({
      hasMessage: true,
      message: "You must select a file before submitting!",
    });
    return;
  }

  const isFileValid = file.name.substr(-3) === "txt";
  if (!isFileValid) {
    setMessage({
      hasMessage: true,
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
      setMessage({
        hasMessage: true,
        message: "File sent to database!",
        code: "",
      });
      setFile("");
    })
    .catch((err) =>
      setMessage({
        hasMessage: true,
        message: err.response.data,
        code: "",
      })
    );
}

const formHandler = {
  submitForm,
};

export default formHandler;
