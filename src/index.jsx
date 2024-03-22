import React from "react";
import ReactDOM from "react-dom/client";

let root;

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Hello, React!</h1>
      <h2>Count is {count}! </h2>
      <button onClick={() => setCount((count) => count + 1)}>Click me</button>

      <p>Change 1</p>
    </div>
  );
}

if (module.hot) {
  module.hot.accept();
}

let container = null;

document.addEventListener("DOMContentLoaded", function (event) {
  if (!container) {
    container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});
