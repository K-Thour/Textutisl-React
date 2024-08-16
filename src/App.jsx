import React from "react";
import Textform from "./Components/Textform.jsx";
import Navbar from "./Components/Navbar.jsx";
// import About from "./Components/About.jsx";
import "./App.css";
import { useState } from "react";
import Alert from "./Components/Alert.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [Button, setButton] = useState("");
  const [color, setColor] = useState("black");
  const [mode, setMode] = useState("light");
  const [validity, setValidity] = useState("Enable");
  const [alert, setAlert] = useState(null);
  let selectColor = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  };
  let showAlert = (Message, Result) => {
    setAlert({
      message: Message,
      result: Result,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  let toggle = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      setValidity("Enable");
      showAlert("Light mode enabled", "Success");
      setButton("");
    } else {
      setMode("dark");
      document.body.style.background = color;
      document.body.style.color = "white";
      setValidity("Disable");
      showAlert("Dark mode enabled", "Success");
      setButton("true");
    }
  };
  // const Router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
        
  //     ),
  //   },
  //   {
  //     path: "/about",
  //     element: (
  //       <>
  //         <Navbar
  //           navbar="TextUtilis"
  //           home="home"
  //           disabled="About"
  //           Mode={mode}
  //           Switch={toggle}
  //           Validity={validity}
  //           color={color}
  //           selectColor={selectColor}
  //           Button={Button}
  //         />
  //         <Alert alert={alert} /> <About Mode={mode} colour={color} />
  //       </>
  //     ),
  //   },
  // ]);
  return (    
    <>
          <Navbar
            navbar="TextUtilis"
            home="home"
            disabled="About"
            Mode={mode}
            Switch={toggle}
            Validity={validity}
            color={color}
            selectColor={selectColor}
            Button={Button}
          />
          <Alert alert={alert} />
          <Textform
            Heading="Enter you text here"
            Mode={mode}
            showAlert={showAlert}
            color={color}
          />
        </>
  );
}
export default App;
