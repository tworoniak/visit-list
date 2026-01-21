import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { VisitProvider } from "./context/VisitContext.jsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VisitProvider>
      <App />
    </VisitProvider>
  </StrictMode>,
);
