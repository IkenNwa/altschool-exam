import { Link } from "react-router-dom";

function MiniNav() {
  return (
    <>
      <Link to="/dashboard/all">All</Link>
      <Link to="/dashboard/work">Work</Link>
      <Link to="/dashboard/casual">Casual</Link>
    </>
  );
}
export default MiniNav;
