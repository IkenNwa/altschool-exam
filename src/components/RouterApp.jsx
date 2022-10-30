import { Route, Router } from "react-router-dom";
import All from "./All";
import Casual from "./Casual";
import DashBoard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import Navigation from "./Navigation";
import PageNotFound from "./PageNotFound";
import Work from "./Work";

function RouterApp() {
  return (
    <>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="/dashboard/all" element={<All />} />
          <Route path="/dashboard/work" element={<Work />} />
          <Route path="/dashboard/casual" element={<Casual />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Router>
    </>
  );
}
export default RouterApp;
