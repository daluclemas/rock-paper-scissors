import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as pages from "./pages";
import { paths } from "./paths";

function App() {
  return (
    <div className="App border-2 border-red-500 bg-bgRadialGradient min-h-screen">
      <RoutesContainer />
    </div>
  );
}

function RoutesContainer() {
  return (
    <Routes>
      <Route element={<pages.Home />} path={paths.home} />
    </Routes>
  );
}

export default App;
