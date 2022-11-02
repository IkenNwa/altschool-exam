import React from "react";


class ErrorBoundary extends React.Component {
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
          <h2>An Error Has Occurred</h2>
          <p>{this.props}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
