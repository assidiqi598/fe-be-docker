import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [text, setText] = useState("");

  const handleClick = () => {
    axios
      .get("http://localhost:3000")
      .then(function (response) {
        // handle success
        console.log(response);
        setText(response.data.text);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <>
      <button onClick={() => handleClick()}>Click me!</button>
      <br />
      {text ?? <p>{text}</p>}
    </>
  );
}

export default App;
