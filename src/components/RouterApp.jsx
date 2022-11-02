import { Route, Routes } from "react-router-dom";
import All from "./All";
import Casual from "./Casual";
import DashBoard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import Work from "./Work";

function RouterApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<DashBoard />}>
          <Route path="all" element={<All />} />
          <Route path="work" element={<Work />} />
          <Route path="casual" element={<Casual />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default RouterApp;
