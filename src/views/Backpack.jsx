import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PokemonParty from "../components/backpack/PokemonParty";
import OpenPokedex from "../components/backpack/OpenPokedex";
import MenuBackgrond from "../animatios/backgronds/MenuBackgrond";
import Font from "../animatios/font/Font";
import Pointer from "../animatios/Pointer";
import pointerPositions from "../utils/pointerPositions";

const Backpack = () => {
  const dispatch = useDispatch();
  const {
    backpackOpen,
    backKey,
    pointerPosition,
    selectInWorld,
    backPackView,
  } = useSelector((state) => state);
  const [openBackpack, setOpenBackpack] = useState(backpackOpen);
  const [displayContent, setDisplayContent] = useState("");
  const [pokemonPartyProp, setPokemonPartyProp] = useState("");
  const [pointerPositionIndex, setPointerPositionIndex] = useState(16);

  const { backpackInit } = pointerPositions;
  const backgrondPosition = { top: 0, left: 0, right: 72, bottom: 120 };

  useEffect(() => {
    setOpenBackpack(backpackOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backpackOpen]);

  useEffect(() => {
    if (selectInWorld && backpackOpen) handleSelect(selectInWorld);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectInWorld]);

  useEffect(() => {
    if (backKey) handleBackKey();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backKey]);

  useEffect(() => {
    setPointerPositionIndex(backpackInit[pointerPosition.index].top);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointerPosition]);

  function handleSelect(selectInWorld) {
    if(selectInWorld === "pokeParty") {
      setDisplayContent(selectInWorld);
    } else {
      setPokemonPartyProp("enter");
    }
  }

  function handleBackKey() {
    if (backPackView === "pokeParty") {
      setPokemonPartyProp("back");
    }
    if (backPackView === "backpackInit") {
      setDisplayContent("");
      dispatch({ type: "TOGGLE_BACKPACK" });
    }
  }
  /**
   * Function is called from child component after select/enter or backkey has been used. The child component checks for changes in the prop for an action to happen.
   * @param {string} type curently used for specific task atm, 'back' means that the user is backing out of the pokemon party
   * @returns {viod} setting state with a potensial dispatch
   */
  function resetProp(type) {
    setPokemonPartyProp("");
    if (type === "back") {
      dispatch({ type: "SET_BACKPACK_VIEW", payload: "backpackInit" });
      setDisplayContent("");
    }
  }

  return (
    <div className="main-backpack-container">
      {openBackpack ? (
        <div className="relativeP">
          <div className="absolute-size-100">
            <MenuBackgrond position={backgrondPosition} />
          </div>
          {displayContent === "pokeParty" ? (
            <PokemonParty
              pointerPosition={pointerPosition}
              pokemonPartyProp={pokemonPartyProp}
              resetProp={(type) => resetProp(type)}
            />
          ) : null}
          {displayContent === "pokedex" ? <OpenPokedex /> : null}
          <div className="relativeP">
            <div
              style={{
                position: "absolute",
                top: `${pointerPositionIndex}px`,
                left: "8px",
              }}>
              <Pointer />
            </div>
            <div className="open-pokedex-box">
              <Font text="POKEDEX" />
            </div>
            <div className="open-party-box">
              <Font text="POKEMON" />
            </div>
            <div className="open-items-box">
              <Font text="ITEM" />
            </div>
            <div className="open-name-box">
              <Font text="VIKTOR" />
            </div>
            <div className="open-save-box">
              <Font text="SAVE" />
            </div>
            <div className="open-options-box">
              <Font text="OPTION" />
            </div>
            <div className="exit-backback-box">
              <Font text="EXIT" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Backpack;
