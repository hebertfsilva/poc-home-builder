import { StrictMode } from "react";

import { IrisProvider } from "@arcotech-services/iris-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./ui/styles/index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IrisProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </IrisProvider>
  </StrictMode>
);
