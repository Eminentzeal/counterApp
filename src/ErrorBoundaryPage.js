import React, { Component } from 'react';

class ErrorBoundaryPage extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Error occurred. This is a test for error boundary.</h2>;
    }
    return (
      <div>
        <h2>Error Boundary Test Page</h2>
        <button onClick={() => this.forceUpdate()}>Simulate Error</button>
      </div>
    );
  }
}

export default ErrorBoundaryPage;
