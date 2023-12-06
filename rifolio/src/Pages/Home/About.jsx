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
    <div className="max-w-6xl mx-auto grid grid-cols-3 min-h-screen text-green-100">
      <div className=" mt-10">
        <img src={hero} alt="landing" />
      </div>
      <div className="col-span-2 px-5 space-y-5">
        <h1 className="text-4xl mt-20 font-bold">
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
        <p className="text-3xl font-bold pb-5">
          I'm <span className="text-[#3CD7A1]">skilled</span> in
        </p>
        <div className="space-y-14">
          <div className="flex justify-between text-5xl text-[#3CD7A1]">
            <Tooltip text="HTML5">
              <FaHtml5 />
            </Tooltip>
            <Tooltip text="CSS3">
              <FaCss3Alt />
            </Tooltip>
            <Tooltip text="Tailwind CSS">
              <SiTailwindcss />
            </Tooltip>
            <Tooltip text="DaisyUI">
              <SiDaisyui />
            </Tooltip>
            <Tooltip text="JavaScript">
              <IoLogoJavascript />
            </Tooltip>
          </div>
          <div className="flex justify-between text-5xl text-[#3CD7A1]">
            <Tooltip text="Vite">
              <SiVite />
            </Tooltip>
            <Tooltip text="React">
              <FaReact />
            </Tooltip>
            <Tooltip text="Node.js">
              <FaNode />
            </Tooltip>
            <Tooltip text="Express.js">
              <SiExpress />
            </Tooltip>
            <Tooltip text="MongoDB">
              <SiMongodb />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;