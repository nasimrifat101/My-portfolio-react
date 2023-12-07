/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { FaHtml5, FaCss3Alt, FaReact, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress, SiVite } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import hero from "../../assets/landing.png";

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group">
      {children}
      <div className="opacity-0 text-white text-xs rounded-md py-2 absolute z-10 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2">
        {text}
        <div className="border-t-4 mx-auto mt-2"></div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-3 lg:h-[570px] text-green-100 cursor-crosshair">
      <div className=" mt-10 hover:opacity-50 ease-in-out duration-1000 p-10 lg:p-0">
        <img src={hero} alt="landing" />
      </div>
      <div className="lg:col-span-2 px-5 space-y-5">
        <h1 className=" text-2xl lg:text-4xl lg:mt-20 font-bold">
          I'm a{" "}
          <span className="text-[#3CD7A1] hover:text-orange-400 ease-in-out duration-500">
            Frontend Developer
          </span>{" "}
          from{" "}
          <span className="text-[#3CD7A1] hover:text-orange-400 ease-in-out duration-500">
            Dhaka, Bangladesh
          </span>
          .
        </h1>
        <p>
          I enjoy talking complex problems and turning them into simple and
          beautiful interface designs. I also love the logic and structure of
          coding and always strive to write elegant and efficient code whether
          it be HTML CSS or any other languages. When I'm not coding or pushing
          pixels, you can find me in the gym.
        </p>
        <p className="text-xl lg:text-3xl font-bold pb-5">
          I'm{" "}
          <span className="text-[#3CD7A1] hover:text-orange-400 duration-500 ease-in-out">
            skilled
          </span>{" "}
          in
        </p>
        <div className="space-y-14 pb-10 lg:pb-0">
          <div className="flex justify-between text-3xl lg:text-5xl text-[#3CD7A1]">
            <Tooltip text="HTML5">
              <span className="hover:text-orange-400 duration-700 ease-in-out">
                <FaHtml5 />
              </span>
            </Tooltip>
            <Tooltip text="CSS3">
              <span className="hover:text-orange-400 duration-700 ease-in-out">
                <FaCss3Alt />
              </span>
            </Tooltip>
            <Tooltip text="Tailwind CSS">
              <span className="hover:text-orange-400 duration-700 ease-in-out">
                <SiTailwindcss />
              </span>
            </Tooltip>
            <Tooltip text="DaisyUI">
              <span className="hover:text-orange-400 duration-700 ease-in-out">
                <SiDaisyui />
              </span>
            </Tooltip>
            <Tooltip text="JavaScript">
              <span className="hover:text-orange-400 duration-700 ease-in-out">
                <IoLogoJavascript />
              </span>
            </Tooltip>
          </div>
          <div className="flex justify-between text-3xl lg:text-5xl text-[#3CD7A1]">
            <Tooltip text="Vite">
              <span className="hover:text-orange-400 duration-700 ease-in-out">
                <SiVite />
              </span>
            </Tooltip>
            <Tooltip text="React">
              <span className="hover:text-orange-400 duration-700 ease-in-out">
                <FaReact />
              </span>
            </Tooltip>
            <Tooltip text="Node.js">
              <span className="hover:text-orange-400 duration-700 ease-in-out">
                <FaNode />
              </span>
            </Tooltip>
            <Tooltip text="Express.js">
              <span className="hover:text-orange-400 duration-700 ease-in-out">
                <SiExpress />
              </span>
            </Tooltip>
            <Tooltip text="MongoDB">
              <span className="hover:text-orange-400 duration-700 ease-in-out">
                <SiMongodb />
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
