import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "~/layout/app";

import "./index.css";
import "@radix-ui/themes/styles.css";

createRoot(document.body).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
