import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
