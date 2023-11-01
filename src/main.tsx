import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// ==> Contexts
import { MainProvider } from "@utils/providers/MainProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);
