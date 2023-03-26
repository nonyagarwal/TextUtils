import {useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const removeBackgroundColor=()=>{
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');

  }
  const togglemode = (cls) => {
    console.log(cls);
    removeBackgroundColor();
    document.body.classList.add('bg-'+cls);
    showAlert(cls+" mode enabled",cls);
    setMode(cls);

    // if (mode === "light") {
    //   setMode("dark");
    //   document.body.style.backgroundColor = "#042743";
    //   showAlert("Blue mode enabled", "success");
    //   document.title = "TextUtils- blue mode";
      // setInterval(()=>{document.title="new";},2000);
      // setInterval(()=>{document.title="wow";},1500);
    // } else {
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   showAlert("Light mode enabled", "success");
    //   document.title = "TextUtils- light mode";
    // }
  };
  // const togglemode2 = () => {
  //   if (mode === "light" || mode === "blue") {
  //     setMode("green");
  //     document.body.style.backgroundColor = "#ccff99";
  //     showAlert("Green mode enabled", "success");
  //     document.title = "TextUtils- green mode";
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode enabled", "success");
  //     document.title = "TextUtils- white mode";
  //   }
  // };
  const [alert, setAlert] = useState(null); // setAlert is to set alert variable
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <BrowserRouter>
      <Navbar
        title="Nony"
        aboutText="About"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />  
        {/* understand the importance of exact */}
        <Route exact path="/"
          element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;