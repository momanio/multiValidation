import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { StepsProvider } from "./provider/Context.tsx";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <StepsProvider>
          <App />
        </StepsProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
