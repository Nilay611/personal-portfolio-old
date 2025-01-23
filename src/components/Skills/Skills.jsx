import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { Hr } from "../Extra/Hr/Hr";
import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaPython,
  FaRProject,
  FaUikit,
  FaDatabase,
  FaWhmcs,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiPhotoshop, DiIllustrator, DiJqueryLogo } from "react-icons/di";
import { SiDjango } from "react-icons/si";
import { motion } from "framer-motion";
import { animationThree, transitionTwo } from "../../animations/index";
import "./Skills.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="end"
      variants={animationThree}
      transition={transitionTwo}
    >
      <section className="skills-section" id="skills">
        <div className="skills-container">
          <div
            className="heading-container"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          >
            <div>
              <h1
                className="section-heading skills-title"
                data-outline="Skills"
              >
                Skills
              </h1>
              <Hr
                hrWidth="6rem"
                hrHeight="4px"
                hrMargin="auto"
                hrColor="var(--primary)"
              />
            </div>
          </div>
          <div className="skills-cards-container">
            <div className="skills-card" data-aos="zoom-out-up">
              <div className="skills-card-heading">
                <FaCode />
                <h2 className="skills-card-title">Web Development</h2>
                <Hr
                  hrWidth="6rem"
                  hrHeight="2px"
                  hrMargin="auto"
                  hrColor="var(--primary)"
                />
              </div>
              <div className="skill-flex">
                <p>HTML</p>
                <FaHtml5 />
              </div>
              <div className="skill-flex">
                <p>CSS</p>
                <FaCss3Alt />
              </div>
              <div className="skill-flex">
                <p>JavaScript</p>
                <IoLogoJavascript />
              </div>
            </div>
            <div className="skills-card" data-aos="zoom-out-up">
              <div className="skills-card-heading">
                <FaUikit />
                <h2 className="skills-card-title">Design</h2>
                <Hr
                  hrWidth="6rem"
                  hrHeight="2px"
                  hrMargin="auto"
                  hrColor="var(--primary)"
                />
              </div>
              <div className="skill-flex">
                <p>Figma</p>
                <FaFigma />
              </div>
              <div className="skill-flex">
                <p>Photoshop</p>
                <DiPhotoshop />
              </div>
              <div className="skill-flex">
                <p>Illustrator</p>
                <DiIllustrator />
              </div>
            </div>
            <div className="skills-card" data-aos="zoom-out-up">
              <div className="skills-card-heading">
                <FaDatabase />
                <h2 className="skills-card-title">Machine Learning</h2>
                <Hr
                  hrWidth="6rem"
                  hrHeight="2px"
                  hrMargin="auto"
                  hrColor="var(--primary)"
                />
              </div>
              <div className="skill-flex">
                <p>Python</p>
                <FaPython />
              </div>
              <div className="skill-flex">
                <p>R</p>
                <FaRProject />
              </div>
              <div className="skill-flex">
                <p>JavaScript</p>
                <IoLogoJavascript />
              </div>
            </div>
            <div className="skills-card" data-aos="zoom-out-up">
              <div className="skills-card-heading">
                <FaWhmcs />
                <h2 className="skills-card-title">Frameworks</h2>
                <Hr
                  hrWidth="6rem"
                  hrHeight="2px"
                  hrMargin="auto"
                  hrColor="var(--primary)"
                />
              </div>
              <div className="skill-flex">
                <p>ReactJS</p>
                <FaReact />
              </div>
              <div className="skill-flex">
                <p>Django</p>
                <SiDjango />
              </div>
              <div className="skill-flex">
                <p>jQuery</p>
                <DiJqueryLogo />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
}

export default Skills;
