import { useEffect, useState } from "react";
import hero from '../../../assets/landingg.png'

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

  return (
    <div className="h-[500px] grid grid-cols-2 max-w-6xl mx-auto px-2 text-green-50 cursor-not-allowed">
      <div className="space-y-5 flex flex-col justify-center">
        <h1 className="text-2xl font-bold">Hi I'm</h1>

        <h1 className="text-5xl font-bold text-[#3CD7A1] hover:text-violet-400 ease-in-out duration-1000">
          Nasim Ahamed Rifat
        </h1>
        <div className="hover:text-orange-400 ease-in-out duration-1000 space-y-2">
          <h1 className="text-4xl font-semibold">Frontend Developer</h1>
        </div>
        <p>
          I like to create solid and scalable digital front-end products. My
          main goal is to give you the best visual experiences. From UI design
          to web development I can collaborate at every level.
        </p>
        <p>{currentTime}. </p>
        <span className="text-[#3CD7A1] font-semibold hover:text-orange-400 duration-700 ease-in-out">
          Available for works
        </span>
        <div className="flex space-x-5">
            <button className="btn bg-[#3CD7A1] hover:bg-orange-400 text-black duration-500 ease-in-out"> Download Resume</button>
            <button className="btn btn-outline border-orange-400 border-2 text-orange-400 hover:border-[#3CD7A1] hover:bg-[#3CD7A1] duration-500 ease-in-out hover:text-black">Hire Me</button>
        </div>
      </div>
      <div className="flex justify-end hover:opacity-50 duration-1000 ease-in-out">
        <img src={hero} alt="Hero"  className="h-[500px]"/>
      </div>
    </div>
  );
};

export default Banner;
