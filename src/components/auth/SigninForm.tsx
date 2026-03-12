import { Mail, Lock, EyeOff } from "lucide-react";
const SigninForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-purple-200 via-purple-300 to-purple-400 px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white/40 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-white/30">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Sign in with email
        </h2>

        <p className="text-center text-gray-600 text-sm mt-2 mb-6">
          Make a new doc to bring your words, data, and teams together. For free
        </p>

        <div className="flex items-center bg-white/70 rounded-lg px-3 py-2 mb-4">
          <Mail size={18} className="text-gray-500 mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <div className="flex items-center bg-white/70 rounded-lg px-3 py-2 mb-2">
          <Lock size={18} className="text-gray-500 mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent outline-none w-full text-sm"
          />
          <EyeOff size={18} className="text-gray-500 cursor-pointer" />
        </div>

        <div className="text-right text-sm text-gray-600 mb-4">
          <a href="#" className="hover:text-purple-600">
            Forgot password?
          </a>
        </div>

        <button className="w-full bg-purple-800 text-white py-2 rounded-lg font-medium hover:bg-purple-600 hover:opacity-90 transition">
          Get Started
        </button>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">Or sign in with</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4">
          <button className="icon-chromium bg-white shadow rounded-lg px-6 py-2 hover:text-purple-800  hover:scale-105 transition"></button>

          <button className="icon-facebook bg-white shadow rounded-lg px-6 py-2 hover:text-purple-800 hover:scale-105 transition"></button>

          <button className="icon-apple bg-white shadow rounded-lg px-6 py-2 hover:text-purple-800 hover:scale-105 transition"></button>
        </div>
      </div>
    </div>
  );
};
export default SigninForm;
