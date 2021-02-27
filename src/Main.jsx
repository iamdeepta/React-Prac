import React from "react";
import Home from "./Home";
import Search from "./Search";
import About from "./About";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Main = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/search-image" component={Search} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Main;
