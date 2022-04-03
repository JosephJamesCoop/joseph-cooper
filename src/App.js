import React from "react";

import About from "./components/About";
import ContactMe from "./components/Contact";
import MyWork from "./components/MyWork";
import Nav from "./components/Nav";
// import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Nav></Nav>
    <main>
      <><About></About></>
      <><ContactMe></ContactMe></>
      <><MyWork></MyWork></>
      {/* <><Resume></Resume></> */}
    </main>
    <Footer></Footer>
  </div>
  );
}

export default App;
