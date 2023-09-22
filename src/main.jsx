import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//Contexts
import MovieListProvider from "./contexts/MovieListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieListProvider>
      <App />
    </MovieListProvider>
  </React.StrictMode>
);
