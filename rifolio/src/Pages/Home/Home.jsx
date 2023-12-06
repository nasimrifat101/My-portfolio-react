import About from "./About";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;