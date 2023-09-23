import img from "../assets/img2.jpg";
import logo from "../assets/logo.svg";

const LandingPage = () => {
    return (
        <div
            className="h-screen bg-cover md:bg-center flex items-start"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="text-white px-8 w-full mx-auto md:container md:w-[65%] ">
                <div className="flex items-center justify-start">
                    <img src={logo} alt="Logo" className="h-44 w-44 ml-2" />
                </div>
                <h1 className="text-4xl md:text-7xl font-bold mt-8 mb-8 max-w-xl text-primary">
                    Describe the value of booking  an appointment
                </h1>
                <p className="text-lg md:text-2xl mb-8 max-w-3xl text-primary">
                    No need to get clever. Tell people exactly what <br /> your&rsquo;e offering, then use this space to <br />  communicate your key value proposition.
                </p>
            </div>
        </div>
    );
};

export default LandingPage;
