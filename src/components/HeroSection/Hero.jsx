import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import About from "../AboutSection/About";
import Footer from "../Footer/Footer";
import "./Hero.css";
import { Hr } from "../Extra/Hr/Hr";
import { Button } from "../Extra/Button/Button";
import {
  animationOne,
  animationTwo,
  transitionOne,
} from "../../animations/index";
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const routeGithub = () => {
    window.open("https://github.com/Aether61198");
  };

  const routeLinkedin = () => {
    window.open("https://www.linkedin.com/in/nilaysaxena22/");
  };

  return (
    <>
      <section className="hero-section" id="home">
        <div
          className="container"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <motion.div
            className="column-left"
            initial="out"
            animate="in"
            exit="out"
            variants={animationTwo}
            transition={transitionOne}
          ></motion.div>
          <motion.div
            className="hero-text"
            initial="out"
            animate="in"
            exit="out"
            variants={animationOne}
            transition={transitionOne}
          >
            <div>
              <h1 className="hero-title">Hello, I am</h1>
              <h1 className="hero-name">
                <span>Nilay</span> Saxena
              </h1>
              <Hr
                hrWidth="45%"
                hrHeight="4px"
                hrMargin="1rem 0"
                hrColor="var(--white)"
              />
              <div>
                <span class="highlight">Front-End Developer</span>
                <p>and</p>
                <span class="highlight">Designer</span>
              </div>
              <Hr
                hrWidth="95%"
                hrHeight="1px"
                hrMargin="1rem 0"
                hrColor="var(--white)"
              />
              <div className="hero-buttons">
                <Button
                  class="github-button"
                  btnstyle="filled"
                  size="medium"
                  border=""
                  onClick={routeGithub}
                >
                  <FaGithub />
                  GitHub
                  <FaExternalLinkAlt />
                </Button>
                <Button
                  class="linkedin-button"
                  btnstyle="outline"
                  size="medium"
                  border=""
                  onClick={routeLinkedin}
                >
                  <FaLinkedin />
                  LinkedIn
                  <FaExternalLinkAlt />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <About />
      <Footer />
    </>
  );
}

export default Hero;
