import React from "react";
import { createRoot, type Root } from "react-dom/client";
import App from "./App";

declare global {
  interface Window {
    __APP_ROOT__?: Root;
  }
}

const container = document.getElementById("root");
if (!container) {
  throw new Error('Root element with id="root" not found');
}

if (!window.__APP_ROOT__) {
  window.__APP_ROOT__ = createRoot(container);
}

window.__APP_ROOT__!.render(<App />);
