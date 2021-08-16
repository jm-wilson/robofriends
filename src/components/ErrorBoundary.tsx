import React, { Component, ReactNode } from 'react';

interface IErrorBoundaryState {
  hasError: boolean;
}

interface IErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundry extends Component {
  state: IErrorBoundaryState;

  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oooops. That is not good</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
