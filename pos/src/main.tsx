import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import BillingPage from "./pages/BillingPage";
import InventoryPage from "./pages/InventoryPage";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/billing" element={<BillingPage />}></Route>
        <Route path="/inventory" element={<InventoryPage />}></Route>
        <Route path="/suppliers" element={<BillingPage />}></Route>
        <Route path="/employees" element={<BillingPage />}></Route>
        <Route path="/report" element={<BillingPage />}></Route>
        <Route
          path="/federal-complient-reporting"
          element={<BillingPage />}
        ></Route>
        <Route path="/backup-data" element={<BillingPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
