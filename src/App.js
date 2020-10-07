import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.scss";
import Home from "./components/Home/";
import Size from "./components/Size/";
import Carbs from "./components/Carbs/";
import Protein from "./components/Protein/";
import Veggies from "./components/Veggies/";
import Extra from "./components/Extra/";
import Confirm from "./components/Confirm/";
import Sauce from "./components/Sauce/";
import Modal from "./components/Modal/";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  const [meal, setMeal] = useState({
    size: "",
    carbs: "",
    protein: "",
    sauce: "",
    extras: [],
  });
  const [showModal, setShowModal] = useState(false);

  const selectSize = (size) => {
    setMeal({ ...meal, size });
  };
  const selectCarbs = (carbs) => {
    setMeal({ ...meal, carbs });
  };
  const selectProtein = (protein) => {
    setMeal({ ...meal, protein });
  };
  const selectVeggies = (veggies) => {
    setMeal({ ...meal, veggies });
  };
  const selectSauce = (sauce) => {
    setMeal({ ...meal, sauce });
  };

  const addExtra = (extra) => {
    let newExtras;
    if (!meal.extras.includes(extra)) {
      newExtras = [...meal.extras, extra];
    } else {
      newExtras = meal.extras.filter((item) => item !== extra);
    }
    setMeal({ ...meal, extras: newExtras });
  };
  const clearMeal = () => {
    setMeal({
      size: "",
      carbs: "",
      protein: "",
      sauce: "",
      extras: [],
    });
  };

  return (
    <>
      <Header />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        clearMeal={clearMeal}
      />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Switch location={location} key={location.key}>
          <Route path="/size">
            <Size selectSize={selectSize} meal={meal} />
          </Route>
          <Route path="/carbs">
            <Carbs selectCarbs={selectCarbs} meal={meal} />
          </Route>
          <Route path="/protein">
            <Protein selectProtein={selectProtein} meal={meal} />
          </Route>
          <Route path="/veggies">
            <Veggies selectVeggies={selectVeggies} meal={meal} />
          </Route>
          <Route path="/sauce">
            <Sauce selectSauce={selectSauce} meal={meal} />
          </Route>
          <Route path="/extra">
            <Extra addExtra={addExtra} meal={meal} />
          </Route>
          <Route path="/confirm">
            {" "}
            <Confirm meal={meal} setShowModal={setShowModal} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
