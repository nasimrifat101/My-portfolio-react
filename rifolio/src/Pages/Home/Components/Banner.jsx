import { useEffect, useState } from "react";
import hero from "../../../assets/landingg.webp";
import FramerMagnetic from "./FramerMagnetic";

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const currentDate = new Date();
      const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "long",
      };
      const formattedTime = currentDate.toLocaleString("en-US", options);
      setCurrentTime(formattedTime);
    };

    updateCurrentTime();

    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDownloadResume = () => {
    const resumePdfUrl =
      "https://www.dropbox.com/scl/fi/ceyxq7xoyloufir84got3/Rifat-s-resume-portfolio.pdf?rlkey=r18nhs0ffg4hg9arku4tzhrz9&dl=1";

    const downloadLink = document.createElement("a");
    downloadLink.href = resumePdfUrl;

    downloadLink.download = "Rifats_Resume.pdf";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  const scrollToContactForm = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="lg:h-[500px] grid lg:grid-cols-2 max-w-6xl mx-auto lg:px-2 cursor-crosshair p-2 lg:p-0">
      <div className="space-y-5 flex flex-col justify-center p-4 lg:p-0">
        <h1 className="text-2xl text-[#A6ADBB] font-bold">Hi I'm</h1>

        <h1 className="text-3xl lg:text-5xl font-bold text-[#3CD7A1] hover:text-violet-400 ease-in-out duration-1000">
          Nasim Ahamed Rifat
        </h1>
        <div className="text-[#A6ADBB] hover:text-orange-400 ease-in-out duration-1000 space-y-2">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            Frontend Developer
          </h1>
        </div>
        <p className="text-[#A6ADBB]">
          I like to create solid and scalable digital front-end products. My
          main goal is to give you the best visual experiences. From UI design
          to web development I can collaborate at every level.
        </p>
        <p className="text-[#A6ADBB]">{currentTime}. </p>
        <span className="text-[#3CD7A1] font-semibold hover:text-orange-400 duration-700 ease-in-out">
          Available for works.
        </span>

        <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-5">
          <button
            onClick={handleDownloadResume}
            className="btn bg-[#3CD7A1] hover:bg-orange-400 text-black duration-500 ease-in-out"
          >
            {" "}
            Download Resume
          </button>
        <FramerMagnetic>
        <button
           onClick={() => {
            handleDownloadResume();
            scrollToContactForm();
          }}
          className="btn btn-outline border-orange-400 border-2 text-orange-400 hover:border-[#3CD7A1] hover:bg-[#3CD7A1] duration-500 ease-in-out hover:text-black">
            Hire Me
          </button>
        </FramerMagnetic>
        </div>
      </div>
      <div className="flex justify-end opacity-80 hover:opacity-50 duration-1000 ease-in-out">
        <img src={hero} alt="Hero" className="h-[500px] hidden lg:block" />
      </div>
    </div>
  );
};

export default Banner;
