import { FaLinkedin, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto lg:h-[300px] py-10">
      <div className="lg:space-y-36">
        <div className="flex justify-around text-2xl lg:text-4xl lg:pt-10">
          <span className=" hover:text-green-300 cursor-pointer duration-500">
            <NavLink
              to="https://www.linkedin.com/in/nasimrifat10/"
              target="_blank"
            >
              <FaLinkedin />
            </NavLink>
          </span>
          <div className="border-r-2 rotate-12"></div>
          <span className=" hover:text-green-300 cursor-pointer duration-500">
            <NavLink to="https://web.facebook.com/OMA.RIFAT/" target="_blank">
              <FaFacebookSquare />
            </NavLink>
          </span>
          <div className="border-r-2 rotate-12"></div>
          <span className=" hover:text-green-300 cursor-pointer duration-500">
            <NavLink to="https://github.com/nasimrifat101" target="_blank">
              <FaGithub />
            </NavLink>
          </span>
        </div>
        <div className="flex justify-between font-semibold text-xs">
          <div className="hidden lg:block">
            <div className="flex space-x-5">
              <h1>Bye</h1>
              <h1>Au Revoir</h1>
              <h1>Adios</h1>
              <h1>Ma’a as-salaama</h1>
            </div>
          </div>
          <div className="hidden lg:block text-green-400">
            Design & Developed by Rifat
          </div>
          <div className="hidden lg:block">
            <div className="flex space-x-5">
              <h1>Ciao</h1>
              <h1>Aloha</h1>
              <h1>Sayōnara</h1>
              <h1>Do svidaniya</h1>
            </div>
          </div>
        </div>
        <div className="lg:hidden text-green-400 text-center pt-8 text-xs">
          Design & Developed by Rifat
        </div>
      </div>
    </div>
  );
};

export default Footer;
