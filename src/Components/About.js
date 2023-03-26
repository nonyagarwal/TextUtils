import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "#042743",
  //   border: "1px solid white",
  // });

  // const [btnText, setBtnText] = useState("Enable light Mode");

  // const togglestyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "#042743",
  //       backgroundColor: "white"
  //     });
  //     setBtnText("Enable dark mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "#042743",
  //       border: "1px solid white",
  //     });
  //     setBtnText("Enable light mode");
  //   }
  // }

  const myStyle= {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: '10px'
  };

  return (
    <div className="container" style={myStyle}>
      <h2>About us:</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Analyzation is important</strong> TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or other actions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Cost is important</strong> TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Browser Compatibility is an important aspect</strong> This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opers. It isuits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button
          onClick={togglestyle}
          type="button"
          className="btn btn-secondary my-3"
          style={myStyle}
        >
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
