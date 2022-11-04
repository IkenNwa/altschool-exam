import NoFive from "./NoFive";
import SEO from "./SEO"

function All() {
  return (
    <div className="user">
      <SEO
        title="ErrorBoundary Test"
        description="This App Runs an error when the solution of two added numbers has a factor of five."
        type="App"
        name="Error Boundary Test"
      />
      <h2>Test Error Boundary</h2>
      <NoFive />
    </div>
  );
}
export default All;
