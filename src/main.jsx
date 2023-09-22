import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//Contexts

import GameListProvider from "./contexts/GameListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GameListProvider>
      <App />
    </GameListProvider>
  </React.StrictMode>
);
