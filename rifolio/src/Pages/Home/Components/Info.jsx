/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./info.css";

import { motion } from "framer-motion";
import useMousePosition from "./useMousePosition";

const Info = () => {
  const { x, y } = useMousePosition();
  const [hovered, isHovered] = useState(false);

  const size = hovered ? 400 : 50;

  return (
    <main className="mainn">
      <motion.div
        className="maskk"
        animate={{
          webkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px ${size}px`,
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,
          maskSize: `${size}px ${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p
          onMouseEnter={() => {isHovered(true)}}
          onMouseLeave={() => {isHovered(false)}}
          className="pp"
        >
        How many programmers does it take to change a light bulb? None,because that's a hardware issue!
        </p>
      </motion.div>
      <div className="bodyy">
        <p className="pp">
        Thank you! If you have any <span className="spann"> inquiries, project proposals,</span> or just want to say hello, feel free to get in touch.
        </p>
      </div>
    </main>
  );
};

export default Info;
