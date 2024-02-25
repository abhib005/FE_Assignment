import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App
      {...{
        question: "How you feel today?",
        options: [
          "Brilliant! I have so much energy",
          "Always can be worse.",
          "Please, end my misery.",
        ],
      }}
    />
  </StrictMode>
);
