import About from "./About";
import Banner from "./Components/Banner";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";
import ContactForm from "./ContactForm";
// import ContactMe from "./ContactForm";
import Works from "./Works";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Works></Works>
           <div className="hidden lg:block">
           <Info></Info>
           </div>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;