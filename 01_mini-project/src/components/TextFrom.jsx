import React, { useState } from "react";

export default function TextFrom(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked ")
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    // console.log("Lowercase was clicked ")
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopyText = () => {
    console.log("text copy here")
    let text = document.getElementById("myBox");
    text.select()
    // text.setSeletionRange(0, 9999);
    navigator.clipboard.writeText(text.value)
  };

  const handleExtraSpaces = () => {
    console.log("object")
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }


  const handleClearText = () => {
    // console.log("Lowercase was clicked ")
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  };undefined
  

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="myBox" className="form-label">
              Email address
            </label>
            <textarea
              className="form-control"
              onChange={handleOnChange}
              value={text}
              id="myBox"
              rows="8"
            ></textarea>
          </div>

          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClearText}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-1 mt-2" onClick={handleCopyText}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-1 mt-2" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </form>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
