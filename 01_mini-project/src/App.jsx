import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextFrom heading="Fill this form required for login" />
        {/* <About /> */}
      </div>
    </>
  );
}
export default App;
