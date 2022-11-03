import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function PageNotFound() {
  return (
    <div>
      <SEO
        title="Page not Found"
        description="The page you were looking for may have been deleted or doesnt exist"
        type="page"
        name="Page not found"
      />
      <Navigation />
      <div className="notFound">
        <h1>404</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXk4M2_nO6Tuq_y9xVkj7X20IDUc-j5XKpGpM5OUuFZw&s"
          alt="Broken"
        />
        <h3>
          The Page you are looking for does not exist or may have been deleted!
        </h3>
        <p>👈<Link to="/">Go Back</Link></p>
      </div>
    </div>
  );
}
export default PageNotFound;
