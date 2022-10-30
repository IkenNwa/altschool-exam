import { Outlet } from "react-router-dom"
import MiniNav from "./MiniNav"
import Navigation from "./Navigation"


function DashBoard() {
    return(
        <div>
            <Navigation />
            <h1>Dashboard here</h1>
            <MiniNav />
            <Outlet />
        </div>
    )
}
export default DashBoard