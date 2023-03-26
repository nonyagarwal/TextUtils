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
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied", "success");
  };
  const onextraspaceclick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  const wordcount = () => {
    // let l = text.length;
    // if (text[l-1] === " ") {
    //   return text.split(" ").length - 1;
    // } else {
    //   return text.split(" ").length;}
    return text.split(/\s+/).filter((element)=>element.length!==0).length;
  };
  const onchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container my-3 text-${
          props.mode === "dark" ? "white" : "black"
        }`}
      >
        <h1 mb-4>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? 'rgb(0,0,0)' : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            placeholder="Enter"
            value={text}
            onChange={onchange}
            rows="6"
            id="myBox"
          />
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={onupclick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ondownclick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={onclearclick}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={onboldclick}>
          Bold
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={oncopyclick}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={onextraspaceclick}>
          Remove Extra Spaces
        </button>
      </div>
      <hr />
      <div
        className={`container my-3 text-${
          props.mode === "dark" ? "white" : "black"
        }`}
      >
        <h1 className="my-2">Text-Summary</h1>
        You entered : {text}<br />
        Words: {wordcount()}
        <br />
        Characters: {text.length}
        <br />
        Time taken to read the text: {0.008 * text.split(/\s+/).filter((element)=>element.length!==0).length}
        <h3 className= "my-2">Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"} </p>
      </div>
    </>
  );
}
