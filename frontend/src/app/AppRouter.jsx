import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../features/auth/AuthContext";
import Login from "../features/auth/Login";

function Dashboard() {
  const { auth } = useContext(AuthContext);
  console.log("AUTH STATE:", auth);
  return <h1>Dashboard</h1>;
}

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<h1>register page </h1>} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default AppRouter;
