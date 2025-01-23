import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "../Extra/Button/Button";
import { Hr } from "../Extra/Hr/Hr";
import "./About.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1-4y7hYwdX_i-rr7JIesHX93kI_aN9MvA/view?usp=sharing"
    );
  };

  return (
    <section className="about-section" id="about">
      <div className="shadow-bg"></div>
      <div
        className="about-inner-container"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <h1
          className="section-heading about-title"
          data-aos="zoom-in-down"
          data-outline="About Me"
        >
          About <span>Me</span>
        </h1>
        <Hr
          hrWidth="16%"
          hrHeight="0.25rem"
          hrMargin="0"
          hrColor="var(--primary)"
          // style={{ width: `${(offsetY - viewHeight) * 0.1}%` }}
        />
        <p className="about-info" data-aos="fade-left">
          I am pursuing BTech in Computer Science with a CGPA of 9.16 from Amity
          University Lucknow Campus. I have an ambition of becoming a UI
          Designer and Software Developer. Confident and hardworking, I thrive
          under leadership. Can handle working under pressure. I work on new
          projects in my spare time.
        </p>
        <Button
          class="downloadcv-btn"
          btnstyle="outline"
          size="medium"
          border=""
          onClick={handleDownloadResume}
        >
          DOWNLOAD RESUME
        </Button>
      </div>
    </section>
  );
}

export default About;
