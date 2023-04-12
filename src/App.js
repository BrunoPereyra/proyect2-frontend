import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PresentationPage from "./pages/PresentationPage";

import './static/styles/App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/PresentationPage" element={<PresentationPage />} />

          {/* <Route path="/service" element={<Error404 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
