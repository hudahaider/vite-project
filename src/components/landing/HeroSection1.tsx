import HeaderSection from "./HeaderSection";
import { Link } from "react-router";

const HeroSection1 = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* background image */}
      <img
        src="src\assets\hero-image.png"
        alt="hero image "
        className="absolute inset-0 h-screen w-screen"
      />

      {/* top header */}
      <div className="relative z-10">
        <HeaderSection />
      </div>

      {/* background color */}
      <div className=" absolute inset-0  flex flex-col justify-center items-center bg-blue-950/50">
        {/* hero content */}
        <div className="text-white text-center">
          <h4 className="text-md font-semibold mb-3">Startup 3</h4>

          <h1 className="text-4xl font-extrabold leading-tight mb-6">
            Forget About Code
          </h1>

          <p className=" text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae,
            alias-expedita voluptatem commodi ut fugiat molestiae eligendi
            dolorem, laborum dolore, deleniti nesciunt odio tenetur.
          </p>

          <Link to="/signup">
          <button className="text-white font-semibold px-7 py-2 rounded-full bg-blue-700 hover:bg-blue-500">
            Creat an Account
          </button>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
