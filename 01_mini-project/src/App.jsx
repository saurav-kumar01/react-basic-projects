import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";

function App() {
  const [bgChange, setBgChange] = useState("black")
  const toggleMode = () => {
    if (mode === "light") {
      setBgChange("white")
      setMode("dark")
    }else{
      setBgChange("black")
      setMode("light")
    }
    
  }
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} bgChange={bgChange} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextFrom heading="Fill this form required for login" />
        {/* <About /> */}
      </div>
    </>
  );
}
export default App;
