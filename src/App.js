import React from "react";
import Sidebar from "./components/Navbar/Sidebar";
import Hero from "./components/HeroSection/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { Cursor } from "./components/Extra/Cursor/Cursor";
import ScrollToTop from "./components/Extra/ScrollToTop/ScrollToTop";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Cursor />
      <Sidebar />
      <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Hero} />
          <Route exact path="/Home">
            <Redirect to="/" />
          </Route>
          <Route exact path="/Skills" component={Skills} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Blog" />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
