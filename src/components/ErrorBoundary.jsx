import React from "react";

class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="wrapper">
          <h1>Uh Oh!</h1>
          <h2>Something went wrong.</h2>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundaries;
