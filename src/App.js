import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PresentationPage from "./pages/PresentationPage";
import { Search_service } from "./pages/champions/SearchChampions";

import './static/styles/App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/PresentationPage" element={<PresentationPage />} />
          <Route exact path="/Champions" element={<Search_service />} />
          {/* <Route path="/service" element={<Error404 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
