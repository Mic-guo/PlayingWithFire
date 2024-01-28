import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Login from "../components/Login"
import Dashboard from "../components/Dashboard";
import Modules from "../components/Modules";
import { UpdatePassword } from "@supabase/auth-ui-react";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/updatepassword" element={<UpdatePassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/modules" element={<Modules />} />
    </Routes>
  );
};

export default AppRoutes;
