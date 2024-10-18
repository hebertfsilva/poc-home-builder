import { StrictMode } from "react";

import { IrisProvider } from "@arcotech-services/iris-react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IrisProvider>
      <App />
    </IrisProvider>
  </StrictMode>
);
