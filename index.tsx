import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/Components/App";
import ErrorBoundary from "./src/Components/ErrorBoundary/ErrorBoundary";
import { Provider } from "react-redux";
import CustomStore from "./src/Redux/index";
window.onerror = function (message, source, lineno, colno, error) {
  console.error("Global Error:", message, source, lineno, colno, error);
};

window.onunhandledrejection = function (event) {
  console.error("Unhandled Promise Rejection:", event.reason);
};

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <ErrorBoundary>
      <Provider store={CustomStore}>
        <App />
      </Provider>
    </ErrorBoundary>
  );
}
