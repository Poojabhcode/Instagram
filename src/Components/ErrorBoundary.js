import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({ hasError: true });
      // Log the error to the console and an error reporting service
      console.error(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // Render a fallback UI
        return <div>Something went wrong. Please try again later.</div>;
      }
  
      return this.props.children;
    }
  }

export default ErrorBoundary;
