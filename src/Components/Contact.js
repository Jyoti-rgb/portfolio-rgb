import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>Contact Me</h1>
        <div className="contact-icon">
          <a
            href="mailto:jyotimahor6@gmail.com"
            target="_blank"
            className="items"
          >
            <MdEmail className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jyoti-0bb6a5145/"
            target="_blank"
            className="items"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/Jyoti-rgb"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
