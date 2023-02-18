import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OpenWorld from "./views/OpenWorld";
import Fight from "./views/Fight";
import useKeys from "./hooks/use-keys";
import "./styles/css/styles.css";
import "./styles/scss/styles.css";
import Navigation from "./funktionality/navigation/navigation";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const { viewState } = useSelector((state) => state);
  const [displayedView, setDisplayedView] = useState("world");

  useEffect(() => {
    if (viewState === "WildPokemonEncounter") {
      setDisplayedView("FightView");
    } else {
      setDisplayedView("world");
    }
  }, [viewState]);

  useKeys((event) => {
    const dir = event.code.toLowerCase();
    event.preventDefault();
    Navigation(dir, dispatch, selector);
  });

  return (
    <div className="main_game_container">
      <div className="GameBox">
        {displayedView === "FightView" ? <Fight /> : <OpenWorld />}
      </div>
    </div>
  );
}

export default App;
