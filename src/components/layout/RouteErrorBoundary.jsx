import { Component } from "react";
import { RouteLoadError } from "./RouteFallback";

/** Catches errors from lazily loaded routes (e.g. a failed chunk download). */
class RouteErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Route failed to load:", error);
  }

  render() {
    return this.state.hasError ? <RouteLoadError /> : this.props.children;
  }
}

export default RouteErrorBoundary;
