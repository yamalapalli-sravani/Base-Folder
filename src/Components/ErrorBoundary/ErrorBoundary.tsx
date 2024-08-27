import React from "react";
import { Component, ErrorInfo, ReactNode } from "react";

interface errorProps{
    children: ReactNode;
}

interface errorState{
    hasError: boolean,
}

class ErrorBoundary extends Component<errorProps,errorState>{
  constructor(props: errorProps){
    super(props);
    this.state ={
        hasError: false
    }
  }

  static getDerivedStateFromError(error: Error){
      return {hasError: true}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
      
  }
  render() {
      if(this.state.hasError){
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
  }
}

export default ErrorBoundary;