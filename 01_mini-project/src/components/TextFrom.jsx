import React, { useState } from "react";

export default function TextFrom(props) {
  const handleUpClick = (event) => {
    event.preventDefault()
    // console.log("Uppercase was clicked ")
    let newText = text.toUpperCase();
    props.showAlert("convert to uppercase", "success")
    setText(newText);
  };

  const handleLowerClick = (event) => {
    event.preventDefault()
    // console.log("Lowercase was clicked ")
    let newText = text.toLowerCase();
    props.showAlert("convert to lowercase", "success")
    setText(newText);
  };

  const handleCopyText = (event) => {
    event.preventDefault()
    // console.log("text copy here");
    let text = document.getElementById("myBox");
    text.select();
    // text.setSeletionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success")
  };

  const handleExtraSpaces = (event) => {
    event.preventDefault()
    // console.log("object");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space are removed", "success")
  };

  const handleClearText = (event) => {
    event.preventDefault()
    // console.log("Lowercase was clicked ")
    let newText = "";
    setText(newText);
    props.showAlert("Clear text from the textarea", "success")
  };

  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  };
  undefined;

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <form>
          <div className="mb-3">
            <textarea
              className="form-control"
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#55d9b4",
                color: props.mode === "dark" ? "white" : "#042743",
                
              }}
              value={text}
              id="myBox"
              rows="8"
            ></textarea>
          </div>

          <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={handleLowerClick}>
            Convert to Lowercase
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={handleClearText}>
            Clear Text
          </button>
          <button disabled={text.length === 0}
            className="btn btn-primary mx-1 mt-2"
            onClick={handleCopyText}
          >
            Copy Text
          </button>
          <button disabled={text.length === 0}
            className="btn btn-primary mx-1 mt-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </form>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length != 0}).length} words, {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} Minutes {props.mode} read
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
