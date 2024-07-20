import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
    }else{
      setMode("light")
    }
    
  }
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextFrom heading="Fill this form required for login" />
        {/* <About /> */}
      </div>
    </>
  );
}
export default App;
