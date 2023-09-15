import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import CardRating from "./components/CardRating";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CardThanks from "./components/CardThanks";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="body">
        <main className="main">
          <Routes>
            <Route path="/" Component={CardRating} />
            <Route path="/thanks/:rating" Component={CardThanks} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
