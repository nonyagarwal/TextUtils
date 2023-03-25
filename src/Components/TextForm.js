import React, { useState } from "react";

export default function TextForm(props) {
  const onupclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to UPPER CASE", "success");
  };
  const ondownclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to lower case", "success");
  };
  const onclearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };
  const onboldclick = () => {
    const boldText = <span style={{ fontWeight: "bold" }}>{text}</span>;
    setText(boldText);
    props.showAlert("Text converted to bold", "danger");
  };
  const oncopyclick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  };
  const onextraspaceclick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  const wordcount = () => {
    let l = text.length;
    if (text[l-1] === " ") {
      return text.split(" ").length - 1;
    } else {
      return text.split(" ").length;
    }
  };
  const onchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "gray",
              color: props.mode === "light" ? "#042743" : "white",
            }}
            placeholder="Enter"
            value={text}
            onChange={onchange}
            rows="6"
            id="myBox"
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={onupclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={ondownclick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={onclearclick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={onboldclick}>
          Bold
        </button>
        <button className="btn btn-primary mx-1" onClick={oncopyclick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={onextraspaceclick}>
          Remove Extra Spaces
        </button>
      </div>
      <hr />
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1 className="my-2">Text-Summary</h1>
        You entered :<br />
        Words: {wordcount()}
        <br />
        Characters: {text.length}
        <br />
        Time taken to read the text: {0.008 * text.split(" ").length}
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview"} </p>
      </div>
    </>
  );
}
