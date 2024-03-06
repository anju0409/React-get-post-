import React, { useState } from "react";
import axios from "axios";
const App = () => {
  //get the data from backend to frontend
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  //send the data from frontend to backend-one string value
  const data = "hello";

  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  // Post request-form
  const [formData, setFromData] = useState("");
  const postFormFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform",{formData});
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  return (
    <div className="App">
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>

      <button onClick={postDataFromFrontend}>Post Data</button>
      <p id="para"></p>

      <form onSubmit={postFormFromFrontend}>
        <input type="text" name="formdata" value={formData} onChange={(e) => setFromData(e.target.value)}></input>
        <input type="submit" value="Test Form"></input>
      </form>
    </div>
  );
};

export default App;
