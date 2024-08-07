import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import Character from "./views/Character.jsx";
import Planet from "./views/Planet.jsx";
import Vehicle from "./views/Vehicle.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <div className="bg-custon">
            <Navbar className="bar" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/character/:characterName" element={<Character />} />
              <Route path="/planet/:planetName" element={<Planet />} />
              <Route path="/vehicle/:vehicleName" element={<Vehicle />} />
              <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
