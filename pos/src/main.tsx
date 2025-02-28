import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import BillingPage from "./pages/BillingPage";
import InventoryPage from "./pages/InventoryPage";
import SuppliersPage from "./pages/SuppliersPage";
import EmployeesPage from "./pages/EmployeesPage";
import ReportPage from "./pages/ReportPage";
import FederalComplientReportingPage from "./pages/FederalComplientReportingPage";
import BackupDataPage from "./pages/BackupDataPage";
import NavBar from "./components/NavBar";
import "./App.css";

function MainApp() {
  const location = useLocation();
  const showNavBar = location.pathname !== "/";

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/suppliers" element={<SuppliersPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route
          path="/federal-complient-reporting"
          element={<FederalComplientReportingPage />}
        />
        <Route path="/backup-data" element={<BackupDataPage />} />
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>,
);
