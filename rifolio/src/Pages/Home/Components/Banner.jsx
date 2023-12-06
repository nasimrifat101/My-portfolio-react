import { useEffect, useState } from "react";
import hero from "../../../assets/landingg.png";

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
    // Replace the link with the actual URL of your PDF file
    const resumePdfUrl = "https://www.dropbox.com/scl/fi/bhjd4x080olumq253t8f7/Rifat-s-Resume.pdf?rlkey=cwjgisdd2a2qq1qd0jugbxffb&dl=1";

    // Create an invisible anchor element
    const downloadLink = document.createElement("a");
    downloadLink.href = resumePdfUrl;

    // Set the download attribute with the desired filename
    downloadLink.download = "Rifats_Resume.pdf";

    // Append the anchor to the document body
    document.body.appendChild(downloadLink);

    // Trigger a click on the anchor to start the download
    downloadLink.click();

    // Remove the anchor from the document body
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="lg:h-[500px] grid lg:grid-cols-2 max-w-6xl mx-auto lg:px-2 text-green-50 cursor-not-allowed p-2 lg:p-0">
      <div className="space-y-5 flex flex-col justify-center p-4 lg:p-0">
        <h1 className="text-2xl font-bold">Hi I'm</h1>

        <h1 className="text-3xl lg:text-5xl font-bold text-[#3CD7A1] hover:text-violet-400 ease-in-out duration-1000">
          Nasim Ahamed Rifat
        </h1>
        <div className="hover:text-orange-400 ease-in-out duration-1000 space-y-2">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            Frontend Developer
          </h1>
        </div>
        <p>
          I like to create solid and scalable digital front-end products. My
          main goal is to give you the best visual experiences. From UI design
          to web development I can collaborate at every level.
        </p>
        <p>{currentTime}. </p>
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
          <button className="btn btn-outline border-orange-400 border-2 text-orange-400 hover:border-[#3CD7A1] hover:bg-[#3CD7A1] duration-500 ease-in-out hover:text-black">
            Hire Me
          </button>
        </div>
      </div>
      <div className="flex justify-end hover:opacity-50 duration-1000 ease-in-out">
        <img src={hero} alt="Hero" className="h-[500px] hidden lg:block" />
      </div>
    </div>
  );
};

export default Banner;
