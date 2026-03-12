import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import SigninForm from "./components/auth/SigninForm";
import SignupForm from "./components/auth/SignupForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home page" element={<HomePage />} />
        <Route path="/features page" element={<FeaturesPage />} />
        <Route path="/pricing page" element={<PricingPage />} />
        <Route path="/signin-form page" element={<SigninForm />} />
        <Route path="/signup-form page" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
