import { useEffect } from "react";
import About from "./About";
import Banner from "./Components/Banner";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";
import ContactForm from "./ContactForm";
import Works from "./Works";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div data-aos="fade-down" data-aos-duration="1500">
        <Banner></Banner>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <About></About>
      </div>
      <div data-aos="fade-down" data-aos-duration="1500">
        <Works></Works>
      </div>
      <div className="hidden lg:block">
        <div data-aos="fade-up" data-aos-duration="1500">
          <Info></Info>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-duration="1500">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Home;
