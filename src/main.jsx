import React from "react";
import ReactDOM from "react-dom/client";

//Contexts

import GameListProvider from "./contexts/GameListContext.jsx";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GameListProvider>
      <RouterProvider router={route} />
    </GameListProvider>
  </React.StrictMode>
);
