import { Route, Routes } from "react-router-dom";
import DashBoard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import PageNotFound from "./PageNotFound";

function RouterApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default RouterApp;
