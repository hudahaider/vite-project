const HeroSection = () => {
  return (
    <section className="relative bg-linear-to-b from-purple-800 via-purple-500 to-purple-800  min-h-screen flex flex-col items-center justify-center  px-6 py-20 md:px-12 lg:px-24 text-center ">
      <div className="relative z-10 max-w-4xl">
        <div className="flex items-center justify-center gap-2 text-purple-400 text-sm mb-6  rounded-full px-4 py-1 w-fit mx-auto bg-linear-to-r from-indigo-700 to-indigo-900">
          <span>✨</span>
          <p>Your Ultimate AI Tool Companion!</p>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Tailwind CSS Template for AI <br /> Tools and Startups
        </h1>

        <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Highly customizable Tailwind CSS template for AI - Tool, Startup,
          Software, App and Product Sites. Comes with everything you need -
          pages, features, sections, components and more.
        </p>

        <button className="text-white font-semibold px-8 py-3 rounded-lg bg-linear-to-r from-indigo-700 to-indigo-900 hover:from-purple-800 hover:to-purple-950">
          Start Your Free Trial
        </button>
      </div>
    </section>
  );
};
export default HeroSection;
