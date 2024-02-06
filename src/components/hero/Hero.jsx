import "./hero.css";
import Lottie from "lottie-react";
import dev from "../../Animation/Dev.json";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="row m-auto m-5 p-5 justify-content-center align-items-center hero-section  ">
      <div className="info col-12 col-lg-8 text-center text-lg-start p-5   ">
        <div className=" info-left d-flex justify-content-center justify-content-lg-start  align-items-center">
          <motion.img
            // initial={{ transform: "scale(0)" }}
            // animate={{ transform: "scale(1)" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              damping: 10,
              type: "spring",
              stiffness: 100,
              duration: 2,
            }}
            className="avatar"
            src="Haytham_IMG.png"
            alt=""
          />
          <span className="icon-verified p-2 align-self-end "></span>
        </div>
        <div className="my-4 hero-text-color">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className=" "
          >
            Software Developer , Full Stack.
          </motion.h1>
          <p className="my-3 ">
            I`m Haytham Ali . Full Stack Developer with knowledge of HTML, CSS,
            JavaScript, Angular, React , Next.js ,Node.js ,Express ,MongoDB
            seeking to use technical proficiency and creativity to develop
            engaging user experiences and advance in a professional career.
          </p>
        </div>
        <div className="Hero-Icon mb-4 d-flex hero-links  justify-content-start align-items-center  ">
          <a
            className="icon-linkedin-square"
            href="https://www.linkedin.com/in/haytham-ali-a3127a294"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            className="icon-twitter"
            href="https://www.linkedin.com/in/haytham-ali-a3127a294"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            className="icon-github"
            href="https://github.com/Haythampop12111993"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a className="DownCV" href="HaythamAli-FullStack.pdf" download>
            Download CV
          </a>
        </div>
      </div>
      <div className="  info-animation col-12  col-lg-4   ">
        <Lottie animationData={dev} />
      </div>
    </section>
  );
}
export default Hero;
