import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as pages from "./pages";
import { paths } from "./paths";

function App() {
  return (
    <div className="w-full">
      <RoutesContainer />
    </div>
  );
}

function RoutesContainer() {
  return (
    <Routes>
      <Route element={<pages.Home />} path={paths.home} />
      <Route element={<pages.GamePage />} path={paths.playGame} />
    </Routes>
  );
}

export default App;
