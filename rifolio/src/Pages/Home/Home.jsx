import About from "./About";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Works from "./Works";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Works></Works>
        </div>
    );
};

export default Home;