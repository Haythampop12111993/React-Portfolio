import { useEffect, useState } from "react";
import "./header.css";

function Header() {
  const [model, setModel] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("mode") || "dark");
  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
    if (mode === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [mode]);
  return (
    <header
      id="header"
      className="d-flex justify-content-around align-items-center my-4 header    "
    >
      <button
        onClick={() => {
          setModel(!model);
        }}
        className=" ms-3 d-none model-btn icon-menu fs-4  "
      ></button>
      <div />
      <nav className=" rounded-pill nav-dark px-2 mx-3 shadow-sm ">
        <ul className="d-flex justify-content-center  align-items-center m-0 p-2  ">
          <li>
            <a
              className="header-nav-color-links  "
              // href="https://www.google.com"
              // target="_blank"
              // rel="noreferrer"
              href="#header"
            >
              Home
            </a>
          </li>
          <li>
            <a className="header-nav-color-links  " href="#main">
              Projects
            </a>
          </li>
          <li>
            <a className="header-nav-color-links  " href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className=" dark-white-btn  ">
        <button
          onClick={() => {
            setMode(mode === "dark" ? "light" : "dark");
            localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
          }}
          className=""
        >
          <div className="d-flex justify-content-center align-items-center">
            <div
              className={
                mode == "light"
                  ? "me-3 icon-sun fs-4 shadow-sm "
                  : "me-3 icon-moon-o fs-4 shadow-sm "
              }
            ></div>
          </div>
        </button>
      </div>
      {model && (
        <div className="model      ">
          <ul className="model-links    ">
            <li className="d-flex justify-content-end">
              <button
                onClick={() => {
                  setModel(false);
                }}
                className="icon-close pt-2 pe-2 fs-5"
              ></button>
            </li>
            <li>
              <a className="header-nav-color-links  " href="#header">
                Home
              </a>
            </li>
            <li>
              <a className="header-nav-color-links  " href="#main">
                Projects
              </a>
            </li>
            <li>
              <a className="header-nav-color-links  " href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
export default Header;
