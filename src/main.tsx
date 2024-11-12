import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StepsProvider } from "./provider/Context.tsx";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StepsProvider>
      <App />
    </StepsProvider>
  </StrictMode>
);
