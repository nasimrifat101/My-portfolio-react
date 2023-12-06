import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const aboutOffset = document.getElementById("about").offsetTop;
    const worksOffset = document.getElementById("works").offsetTop;
    const resumeOffset = document.getElementById("resume").offsetTop;

    if (scrollPosition < aboutOffset) {
      setActiveSection("home");
    } else if (scrollPosition < worksOffset) {
      setActiveSection("about");
    } else if (scrollPosition < resumeOffset) {
      setActiveSection("works");
    } else {
      setActiveSection("resume");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeStyle = {
    color: "#3CD7A1",
    textDecoration: "line-through",
    fontWeight: "bold",
  };

  const navlink = (
    <>
      <li>
        <NavLink
          to="#home"
          style={activeSection === "home" ? activeStyle : null}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#about"
          style={activeSection === "about" ? activeStyle : null}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#works"
          style={activeSection === "works" ? activeStyle : null}
        >
          Works
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#resume"
          style={activeSection === "resume" ? activeStyle : null}
        >
          Resume
        </NavLink>
      </li>
    </>
  );

  return (
    <div  className="max-w-6xl mx-auto hidden lg:block">
      <div className="navbar">
        <div className="navbar-start">
          <a className="text-4xl font-bold text-green-100">RIFAT.</a>
        </div>
        <div className="navbar-end hidden lg:flex list-none space-x-10">
          {navlink}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
