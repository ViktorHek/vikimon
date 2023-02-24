import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../../database/api";
import Pointer from "../../animatios/Pointer";
import HealthBar from "../../animatios/HealthBar";
import Font from "../../animatios/font/Font";
import MenuBackgrond from "../../animatios/backgronds/MenuBackgrond";
import pointerPositions from "../../utils/pointerPositions";
import DisplayPartyMember from "./DisplayPartyMember";
import globals from "../../utils/globalVariables";

const PokemonParty = ({ pointerPosition, pokemonPartyProp, resetProp }) => {
  const dispatch = useDispatch();
  const { myPokemons } = useSelector((state) => state);
  const [pokeParty, setPokeParty] = useState([]);
  const [pointerStyle, setPointerStyle] = useState({ top: 8, left: 0 });
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showMoves, setShowMoves] = useState(false);
  const pointerPositionArr = pointerPositions.pokemonParty;
  const menuBackgrondInitPos = { top: 0, left: 0, right: 152, bottom: 40 };

  useEffect(() => {
    populatePokemonParty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pokemonPartyProp === "enter") handleSelect();
    if (pokemonPartyProp === "back") handleBackKey();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonPartyProp]);

  useEffect(() => {
    setPointerStyle({
      top: pointerPositionArr[pointerPosition.index].top,
      left: pointerPositionArr[pointerPosition.index].left,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointerPosition]);

  function handleSelect() {
    if (selectedPokemon === null) {
      setSelectedPokemon(pointerPosition.index);
    } else {
      if (showMoves) {
        setShowMoves(false);
      } else {
        setShowMoves(true);
      }
    }
		resetProp()
  }

  function handleBackKey() {
    if (selectedPokemon === null) {
      resetProp('back')
    } else {
      setSelectedPokemon(null);
      resetProp()
    }
  }

  async function populatePokemonParty() {
    let populatedPartyList = myPokemons;
    if (!populatedPartyList.length) {
      let localStorageString = localStorage.getItem(globals.lsPokemonParty);
      let responce = await api.callPokiParty(localStorageString);
      populatedPartyList = responce.data;
      dispatch({
        type: "POPULATE_POKEMON_PARTY",
        payload: populatedPartyList,
      });
    }
    setPokeParty(populatedPartyList);
  }

  let pokemonList = pokeParty.map((el, index) => {
    let className = `mon-in-bag-container-${index}`;
    return (
      <div key={`${el.uid},${index}`} className={className}>
        <div className="mon-in-bag-name-container">
          <Font text={el.name.toUpperCase()} />
        </div>
        <div className="mon-in-bag-level-container">
          <svg
            width={8}
            height={8}
            viewBox="0 0 8 8"
            fill="none"
            className="absoluteP">
            <rect x="1" y="3" width="1" height="1" fill="black" />
            <rect x="1" y="5" width="1" height="1" fill="black" />
            <rect x="3" y="2" width="2" height="5" fill="black" />
            <rect x="5" y="6" width="2" height="1" fill="black" />
          </svg>
          <Font text={JSON.stringify(el.level)} style={{ marginLeft: "8px" }} />
        </div>
        <div className="mon-in-bag-character-container">
          <img src="images/players/pokemon-icons-for-party.png" alt="" />
          <span></span>
        </div>
        <div className="mon-in-bag-hp-bar-container">
          <HealthBar data={{ maxHealth: 100, curretnHelath: 100 }} />
        </div>
        <div className="mon-in-bag-hp-container">
          <Font text={`${el.stats.hp}/${el.stats.hp}`} />
        </div>
      </div>
    );
  });

  return (
    <div className="absolute-full-size main-pokemon-party-container">
      <div
        className="pokemon-party-poiner-container"
        style={{
          top: `${pointerStyle.top}px`,
          left: `${pointerStyle.left}px`,
        }}>
        <Pointer />
      </div>
      <div className="absoluteP" style={{ paddingLeft: "6px" }}>
        {pokemonList && pokemonList}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 96,
            height: "48px",
            width: "100%",
          }}>
          <MenuBackgrond position={menuBackgrondInitPos} />
          <span
            style={{
              position: "absolute",
              left: 8,
              top: 16,
              height: "32px",
              width: "144px",
            }}>
            <Font text="Choose a POKEMON" />
          </span>
        </div>
      </div>
      {selectedPokemon !== null && (
        <DisplayPartyMember
          pokemon={pokeParty[selectedPokemon]}
          showMoves={showMoves}
        />
      )}
    </div>
  );
};

export default PokemonParty;
