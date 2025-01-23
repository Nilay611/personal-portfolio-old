import React from "react";
import "./Contact.css";
import {
  FaEnvelopeOpenText,
  FaMobileAlt,
  FaWhatsapp,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="Contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Info</h2>
          <ul className="info">
            <li>
              <FaEnvelopeOpenText style={{ fontSize: `2rem` }} />
              <p>lorem@impsum.com</p>
            </li>
            <li>
              <FaMobileAlt style={{ fontSize: `2rem` }} />
              <p>+91-XXXXXXXXXX</p>
            </li>
            <li>
              <FaWhatsapp style={{ fontSize: `2rem` }} />
              <p>+91-XXXXXXXXXX</p>
            </li>
          </ul>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/nilay.saxena.50">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/magnus_61198/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nilay-saxena-74b511194/">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <h2>Send a Message</h2>
          <div className="form-container">
            <div className="input-box w50">
              <input type="text" name="" required></input>
              <span>First Name</span>
            </div>
            <div className="input-box w50">
              <input type="text" name="" required></input>
              <span>Last Name</span>
            </div>
            <div className="input-box w100">
              <input type="email" name="" required></input>
              <span>Email</span>
            </div>
            <div className="input-box w100">
              <textarea name="" required></textarea>
              <span>Write your message here...</span>
            </div>
            <div className="input-box">
              <input
                class="submit-btn"
                type="submit"
                value="Submit"
                required
              ></input>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
