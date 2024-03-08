import Navbar from '../components/Navbar/Navbar'
import LandingPage from "../components/LandingPage/LandingPage";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import ContactMe from "../components/ContactMe/ContactMe";


const Home = () => {
    return (
        <div>

            <Navbar />


            <LandingPage />

            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />

        </div>
    )
}

export default Home
