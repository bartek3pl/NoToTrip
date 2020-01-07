import React, { Component, ErrorInfo } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          Something went wrong. <Link to="/">Click here</Link> to go back to the
          home page or wait 5 seconds for automatic redirection.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
