import React from "react";
import "./App.css";
import AppRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
