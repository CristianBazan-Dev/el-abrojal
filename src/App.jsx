import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";

import Header from "./components/header/Header";
import MainPages from "./components/mainPages/MainPages";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <DataProvider>
      <Router>
        <article className="app">
          <Header />
          <MainPages />
          <Footer />
        </article>
      </Router>
    </DataProvider>
  );
}

export default App;
