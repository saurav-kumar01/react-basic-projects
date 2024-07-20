import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
    
  }
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextFrom heading="Enter the text area below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}
export default App;
