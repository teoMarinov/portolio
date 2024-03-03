import AnimatedText from "./AnimatedText"
import picture from "../../assets/Me.png";

const Home = () => {
    return (
        <div className=" flex items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300 to-gray-400 h-[80%]">
            <AnimatedText />
            <img src={picture} alt="picture" className=" w-[30rem] z-10  rounded-full" />

        </div>
    )
}

export default Home
