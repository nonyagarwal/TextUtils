import React from "react";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  const myStyle={
    borderBottom: '3px solid #FFF2CC'
  }
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}}`} style={myStyle}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.mode==='dark'? 'light': 'dark'}`} to="#">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {/* Navyanajali's work: <div className={`form-check form-switch text-${props.mode ==='light'? 'dark': 'light'}`}>
              <input className="form-check-input" onClick= {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode ==='light'? 'blue': 'light'} mode`}</label>
            </div> */}
            <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>{props.togglemode('primary')}} style={{height: '30px', width: '30px', cursor: "pointer"}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.togglemode('success')}} style={{height: '30px', width: '30px', cursor: "pointer"}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.togglemode('warning')}} style={{height: '30px', width: '30px', cursor: "pointer"}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.togglemode('danger')}} style={{height: '30px', width: '30px', cursor: "pointer"}}></div>
              <div className="bg-light rounded mx-2" onClick={()=>{props.togglemode('light')}} style={{height: '30px', width: '30px', cursor: "pointer", border: '1px solid black'}}></div>
              <div className="bg-dark rounded mx-2" onClick={()=>{props.togglemode('dark')}} style={{height: '30px', width: '30px', cursor: "pointer"}}></div>

            </div>
            {/* <div className={`form-check form-switch mx-3 text-${props.mode ==='light'? 'dark': 'light'}`}>
              <input className="form-check-input" onClick= {props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}
