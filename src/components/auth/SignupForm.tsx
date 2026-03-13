import { Mail } from "lucide-react";

const SignupForm = () => {
  return (
    <div className="bg-white min-h-screen w-screen flex flex-col justify-center items-center md:flex-row ">
      {/* Child-1 */}
      <div className="flex flex-1 flex-col justify-center w-full p-12 bg-amber-200 md:h-screen">
        <h1 className="mt-10 mb-8 text-purple-800 text-4xl font-medium">
          Sign Up
        </h1>

        <p className="mb-8 text-lg font-medium text-slate-400">
          Create an account to start posting jobs and build your remote team
          with AI Tool.
        </p>

        <button className="flex justify-center gap-3 w-full p-3 rounded-md border border-purple-800 text-purple-800 font-semibold hover:text-white hover:bg-purple-800 transition-all duration-500 ease-in-out">
          <img src="src\assets\google.png" className="h-6 w-6" />
          Sign up with Google
        </button>

        <p className="flex justify-center text-slate-400 text-lg font-medium m-12">
          or sign up using email
        </p>

        <form action="">
          <div className="flex items-center border rounded-md border-slate-300 shadow-lg p-3">
            <Mail size={18} className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className=" w-full outline-none"
            />
          </div>

         <div>
           <button className="flex justify-center gap-3 w-full h-full p-3 mt-3 rounded-md border bg-purple-500 text-white font-semibold hover:text-white hover:bg-purple-800 transition-all duration-500 ease-in-out">
            Continue <i className="icon-arrow-right"></i>
          </button>
         </div>

          <div className="flex justify-center text-lg font-medium mt-10 mb-10">
            <p className="flex justify-center text-slate-400">
              Already have an account?
            </p>
            <a
              className="text-purple-800 hover:text-purple-500"
              href="/signin"
            >
              Sign in
            </a>
          </div>
        </form>
      </div>

      {/* Child-2*/}
      <div className="hidden md:flex bg-linear-to-b from-purple-400 via-purple-600 to-purple-900 w-full md:w-1/2 flex-1 flex-col justify-center items-center p-8  text-center text-white md:h-screen">
        <h1 className="mt-15 mb-8 font-medium text-4xl">Welcome</h1>
        <p className="mb-8 text-md ">
          Join ur unique plateform. Explore a new experinces.
        </p>
        <button className="flex justify-center gap-3 px-6 py-3 rounded-md border border-purple-500 bg-white text-purple-800 text-lg font-bold hover:text-white hover:bg-purple-500 transition-all duration-500 ease-in-out">
          REGISTER
        </button>
      </div>
    </div>
  );
};
export default SignupForm;
