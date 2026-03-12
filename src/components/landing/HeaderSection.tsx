import { Link } from "react-router";
import { Menu } from "lucide-react";

const HeaderSection = () => {
  return (
    <header className="bg-purple-950 border-b py-8 px-12">
      <nav className="flex gap-2 justify-between items-center text-white md:flex-col lg:flex-row">
        <h1 className="text-4xl font-extrabold text-white leading-tight">
          AI Tool
        </h1>

        <div className="hidden md:flex gap-8 text-2xl font-bold text-white leading-tight">
          <Link
            className="hover:text-purple-400 hover:underline hover:decoration-purple-400"
            to="/home page"
          >
            Home
          </Link>
          <Link
            className="hover:text-purple-400 hover:underline hover:decoration-purple-400"
            to="/features page"
          >
            Features
          </Link>
          <Link
            className="hover:text-purple-400 hover:underline hover:decoration-purple-400"
            to="/pricing page"
          >
            Pricing
          </Link>
        </div>

        <div className="hidden md:flex gap-4 text-2xl">
          <Link
            className="bg-purple-500 hover:bg-purple-400 py-2 px-8 rounded-md text-white"
            to="/signin-form page"
          >
            SignIn
          </Link>
          <Link
            className="border py-2 px-8 rounded-md hover:bg-purple-400"
            to="/signup-form page"
          >
            SignUp
          </Link>
        </div>

        <div className="md:hidden">
          <button className="text-white p-2">
            <Menu size={32} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;
