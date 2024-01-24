import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
// import { motion, useScroll } from "framer-motion";

function App() {
  // const { scrollYProgress } = useScroll();
  const [scrollBtn, setScrollBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    });
  }, []);
  return (
    <>
      <div className="container bg--dark text-center p-0  shadow-sm  ">
        <Header />
        <Hero />
        <div className="line" />
        <Main />
        <div className="line" />
        <Contact />
        <div className="line" />
        <Footer />

        <a style={{ opacity: scrollBtn ? 1 : 0, transition: "1s" }} href="#">
          <button className="icon-keyboard_arrow_up scroll2Up"></button>
        </a>
      </div>
    </>
  );
}

export default App;
