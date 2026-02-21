import { Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<h1>login page </h1>} />
      <Route path="/register" element={<h1>register page </h1>} />
      <Route path="/dashboard" element={<h1>dashboard page </h1>} />
    </Routes>
  );
}
export default AppRouter;
