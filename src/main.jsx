import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AdminLayout from "./layout/AdminLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Interviews from "./pages/Interviews.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import "@fontsource-variable/inter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/interviews" element={<Interviews />} />
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  </StrictMode>,
);
