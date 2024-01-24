import { useState } from "react";
import "./main.css";
import myProjectsArry from "./myProjects";
// import { AnimatePresence, motion } from "framer-motion";

function Main() {
  let [isActive, setActive] = useState("all");
  let [myNewArry, setMyNewArry] = useState(myProjectsArry);
  const hundelShowAll = () => {
    setActive("all");
    setMyNewArry(myProjectsArry);
  };
  const hundelFilter = (filter) => {
    setActive(filter);
    let newArry = myProjectsArry.filter((ele) => {
      return ele.category == filter;
    });
    setMyNewArry(newArry);
  };
  return (
    <section id="main" className=" my-5  ">
      <div className="main row justify-content-center align-items-start g-1">
        <div className="col-12  col-lg-3  ">
          <div>
            <ul className="main-ul">
              <li
                onClick={hundelShowAll}
                className={isActive === "all" ? "active" : null}
              >
                All Projects
              </li>
              <li
                onClick={() => {
                  hundelFilter("Css");
                }}
                className={isActive == "Css" ? "active" : null}
              >
                HTML & CSS
              </li>
              <li
                onClick={() => {
                  hundelFilter("JS");
                }}
                className={isActive == "JS" ? "active" : null}
              >
                HTML & CSS & JavaScript
              </li>
              <li
                onClick={() => {
                  hundelFilter("Angular");
                }}
                className={isActive == "Angular" ? "active" : null}
              >
                Angular
              </li>
              <li
                onClick={() => {
                  hundelFilter("React");
                }}
                className={isActive == "React" ? "active " : null}
              >
                React
              </li>
              <li
                onClick={() => {
                  hundelFilter("Node.js");
                }}
                className={isActive == "Node.js" ? "active " : null}
              >
                Node.js & Express
              </li>
            </ul>
          </div>
        </div>
        <div className=" row col-12 col-lg-8 g-3    ">
          {myNewArry.map((item) => {
            return (
              <div
                // style={{ overflow: "hidden" }}
                // layout
                // initial={{ transform: "scale(0)" }}
                // animate={{ transform: "scale(1)" }}
                // initial={{ scale: "0" }}
                // animate={{ scale: "1" }}
                // transition={{ type: "spring", damping: 8, stiffness: 80 }}
                key={item}
                className=" col-12  col-md-6 "
              >
                <div className="card">
                  <img src={item.img} className="card-img-top" alt="" />
                  <div className="card-body p-0 text-start  p-2">
                    <h4 className="card-text py-2">{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="d-flex card-icons justify-content-between align-items-center py-2 ">
                      <div className="d-flex justify-content-center align-items-center right-icon">
                        <div>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-chain "
                          ></a>
                        </div>
                        <div>
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-github mx-3"
                          ></a>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center left-icon">
                        <div className=" me-2">
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            More
                          </a>
                        </div>
                        <div className="icon-arrow-right "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Main;
