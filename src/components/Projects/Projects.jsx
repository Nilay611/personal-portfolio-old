import React, { useState, useEffect } from "react";
import { Button } from "../Extra/Button/Button";
import Footer from "../Footer/Footer";
import "./Projects.css";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { Hr } from "../Extra/Hr/Hr";
import { motion } from "framer-motion";
import { animationThree, transitionTwo } from "../../animations/index";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const id = 1;

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="end"
      variants={animationThree}
      transition={transitionTwo}
    >
      <section className="projects-section" id="projects">
        <div className="projects-container">
          <div
            className="heading-container"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          >
            <div>
              <h1
                className="section-heading skills-title"
                data-aos="zoom-in-down"
                data-outline="Projects"
              >
                Projects
              </h1>
              <Hr
                hrWidth="6rem"
                hrHeight="4px"
                hrMargin="auto"
                hrColor="var(--primary)"
              />
            </div>
          </div>
          <div className="project-items">
            <div
              className="p-item"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <h1 class="p-item-title">Chat-App</h1>
              <h2 class="p-item-subtitle">
                Created using React Native and Firebase
              </h2>
              <div class="img-container" id={`img-${id}`}></div>
            </div>
            <div
              className="p-item"
              data-aos="fade-right"
              data-aos-duration="500"
            ></div>
            <div
              className="p-item"
              data-aos="fade-left"
              data-aos-duration="500"
            ></div>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
}

export default Projects;
