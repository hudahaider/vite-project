import { Link } from "react-router";

const HeaderSection = () => {
  return (
    <header className="py-14 px-12">

        <div className="flex gap-12 justify-center items-center text-2xl font-semibold text-slate-200 leading-tight">
          <Link
            className="hover:text-blue-400 hover:underline hover:decoration-blue-400"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="hover:text-blue-400 hover:underline hover:decoration-blue-400"
            to="/features"
          >
            Features
          </Link>
          <Link
            className="hover:text-blue-400 hover:underline hover:decoration-blue-400"
            to="/pricing "
          >
            Pricing
          </Link>
        </div>
    </header>
  );
};

export default HeaderSection;
