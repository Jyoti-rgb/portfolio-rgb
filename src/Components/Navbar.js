import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container nav-bar">
          <div className="logo  ">PortFolio</div>

          <div className="right">
            <a className="text-item" href="/">
              Home
            </a>
            <a className="text-item" href="#experinece">
              Experinece
            </a>
            <a className="text-item" href="#skills">
              Skills
            </a>

            <a className="text-item" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
