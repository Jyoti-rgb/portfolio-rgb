import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import Typed from "typed.js";
const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const option = {
      strings: [
        "Welcome to my profile",
        "My name is Jyoti",
        "I'm Software Developer",
        "Frontend Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, option);
    return () => {
      typed.destroy();
    };
  });
  return (
    <>
      <div className="container home">
        <div className="left">
          <h1 ref={typedRef}></h1>
          <a
            href={pdf}
            download="Jyoti_resume.pdf"
            className="btn btn-outline-warning"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img ">
            <img className="profile" src="./myPhoto.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
