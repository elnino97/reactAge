import React, { useState } from "react";

import Input from "./components/Input";
import Display from "./components/Display";
import NewInputBtn from "./components/NewInputBtn";
import "./App.css";

const urls = [
  "https://api.agify.io/?name=",
  "https://api.genderize.io?name=",
  "https://api.nationalize.io?name=",
];

const fetchData = async (name) => {
  const trimmedName = name.replace(/\s+/g, "");
  const requestData = await Promise.all(
    urls.map((url) =>
      fetch(url + trimmedName).then((response) => response.json())
    )
  );
  return requestData;
};

const App = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [nameData, setNameData] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [showDisplay, setShowDisplay] = useState(false);

  const hideInput = () => {
    setShowInput(true);
    setShowDisplay(false);
  };

  const handleInput = (event) => {
    setNameInput(event.target.value);
  };

  const getData = async () => {
    const requestData = await fetchData(nameInput);
    setNameData(requestData);
    setShowInput(false);
    setShowDisplay(true);
  };

  return (
    <div className="wrapper">
      <h1>What does your name say about you?</h1>
      {showInput ? (
        <Input
          name={nameInput}
          handleChange={handleInput}
          onFormSubmit={getData}
        />
      ) : (
        <NewInputBtn handleClick={hideInput} />
      )}
      {showDisplay && <Display name={nameInput} data={nameData} />}
    </div>
  );
};

export default App;
