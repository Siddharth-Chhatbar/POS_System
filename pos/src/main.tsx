import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import BillingPage from "./pages/BillingPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}   />
        <Route path="/billing" element={<BillingPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
