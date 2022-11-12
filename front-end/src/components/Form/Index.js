import axios from "axios";

function RenderForm({ file, setFile }) {
  const baseUrl = process.env.REACT_APP_API_BASEURL;

  function submitForm(e) {
    e.preventDefault();
    if (file === "") {
      throw Error("Must select a file before submitting");
    }
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post(`${baseUrl}transactions`, formData)
      .then((res) => {
        alert("file uploaded!");
        setFile("");
      })
      .catch((err) => console.log(err.response));
  }

  return (
    <form>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={(e) => submitForm(e)}> Submit </button>
    </form>
  );
}

export default RenderForm;

//TODO: Commit - Fixes infinite rendering when getting data from database and updates transactions component when a file is sent successfully to the database
