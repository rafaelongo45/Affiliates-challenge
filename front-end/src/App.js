import axios from "axios";
import { useState } from "react";

function App() {
  const [file, setFile] = useState("");

  const submitForm = () => {
    const formData = new FormData();
    const baseUrl = process.env.REACT_APP_API_BASEURL;
    formData.append("file", file);

    axios.post(baseUrl, formData).then((res) => {
      alert("file uploaded!");
    });
  };

  return (
    <form>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button onClick={submitForm}> Submit </button>
    </form>
  );
}

export default App;
