import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MainTemplate from "./templates/MainTemplate";
import HomeProduct from './pages/Products'
import "./index.scss";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<HomeProduct />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </>
    </div>
  );
}

export default App;
