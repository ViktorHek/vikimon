import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../database/api";
import PlayerInFight from "../components/fight/PlayerInFight";
import OpponentInFight from "../components/fight/OpponentInFight";
import availableKeys from "../utils/availableKeys";
import useKeys from "../hooks/use-keys";
import NavigateFight from "../funktionality/move/NavigateFight";
import Pointer from "../animatios/Pointer";
import FightBackgrond from "../animatios/backgronds/FightBackgrond";
import pointerPositions from "../utils/pointerPositions";

const Fight = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const [pokiParty, setPokiParty] = useState([]);
  const [playersPokemon, setPlayersPokemon] = useState({});
  const [opponentsPokemon, setOpponentsPokemon] = useState({});
  const [pointerPositionIndex, setPointerPositionIndex] = useState(0);
  const [activeStatChangesArr, setActiveStatChangesArr] = useState([]);
  const { myPokemons, selectedAttackFronRedux, selectInFight, fightView, pointerPosition } = selector;
  const { battleInit, selectMoves } = pointerPositions;

  useEffect(() => {
    populateParty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // useEffect(() => {
  //   handlePointer()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pointerPosition])
  // function handlePointer() {

  // }

  useEffect(() => {
    if (selectedAttackFronRedux) {
      calcDamage(selectedAttackFronRedux);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAttackFronRedux]);

  useEffect(() => {
    handleSelect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectInFight]);

  useEffect(() => {
    setPointerPositionIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fightView]);

  async function populateParty() {
    let populatedPartyList = myPokemons;
    if (!populatedPartyList.length) {
      let localStorageString = localStorage.getItem("partyArr");
      let responce = await api.callPokiParty(localStorageString);
      populatedPartyList = responce.data;
      console.log({ populatedPartyList });
      dispatch({
        type: "POPULATE_POKEMON_PARTY",
        payload: populatedPartyList,
      });
    }
    setPlayersPokemon(populatedPartyList[0]);
    setOpponentsPokemon(populatedPartyList[0]);
    setPokiParty(populatedPartyList);
  }

  useKeys((event) => {
    // event.code is better for keys like space and shift
    const dir = event.code.toLowerCase();
    event.preventDefault();
    if (availableKeys.hasOwnProperty(dir)) {
      checkKeys(dir);
    } else {
      console.log("Not a valid Key @Fight.jsx - useKey()", dir);
    }
  });

  function checkKeys(dir) {
    for (const key in availableKeys) {
      if (Object.hasOwnProperty.call(availableKeys, key)) {
        if (key === dir) {
          let newIndex = NavigateFight(dispatch, dir, pointerPositionIndex, fightView);
          setPointerPositionIndex(newIndex);
        }
      }
    }
  }

  function handleSelect() {
    console.log("in select: ", selectInFight, fightView, pointerPositionIndex);
    if (!selectInFight) return;
    if (fightView === "battleInit") {
      switch (pointerPositionIndex) {
        case 0:
          dispatch({ type: "SET_FIGHT_VIEW", payload: "selectMoves" });
          break;
        case 1:
          console.log("selecting pokemon");
          break;
        case 2:
          console.log("selecting items");
          break;
        case 3:
          dispatch({ type: "SET_VIEW", payload: "openWorld" });
          break;
        default:
          console.error("error in handleSelect @ Fight.jsx ", pointerPositionIndex);
          break;
      }
    } else {
      switch (pointerPositionIndex) {
        case 0:
          dispatch({ type: "SET_SELECTED_ATTACK", payload: myPokemons[0].moves[0] });
          break;
        case 1:
          dispatch({ type: "SET_SELECTED_ATTACK", payload: myPokemons[0].moves[1] });
          break;
        case 2:
          dispatch({ type: "SET_SELECTED_ATTACK", payload: myPokemons[0].moves[2] });
          break;
        case 3:
          dispatch({ type: "SET_SELECTED_ATTACK", payload: myPokemons[0].moves[3] });
          break;
        default:
          break;
      }
    }
    dispatch({ type: "SET_SELECT_IN_FIGHT", payload: false });
  }

  async function calcDamage(attack) {
    console.log("funk", playersPokemon, opponentsPokemon, attack);
    if (!attack || !playersPokemon || !opponentsPokemon) {
      console.log("missing swomething in calcDamges function", attack, playersPokemon, opponentsPokemon);
      return;
    }
    let payload = {
      playersPokemon: getPokiObjectForBattle(playersPokemon),
      opponentsPokemon: getPokiObjectForBattle(opponentsPokemon),
      moveId: attack.id,
      gymBadges: [true, true, true, true],
      statChanges: activeStatChangesArr,
    };
    let responce = await api.callDamageCalc(payload);
    console.log("resonsce: ", responce.data);
    let damage = responce.data.playerAttack;
    if (responce.data.statChanges.length) {
      let statChangesListFronAPI = [];
      responce.data.statChanges.forEach((el) => {
        statChangesListFronAPI.push(el);
      });
      setActiveStatChangesArr(statChangesListFronAPI);
    }
    dispatch({ type: "SET_DAMAGE_TO_OPPONENT", payload: Math.floor(damage) });
    dispatch({ type: "SET_SELECTED_ATTACK", payload: null });
  }

  function getPokiObjectForBattle(pokemon) {
    let obj = {
      id: pokemon.id,
      level: pokemon.level,
      abilities: pokemon.abilities,
      types: pokemon.dbData.types,
      stats: {
        attack: pokemon.stats.attack,
        defense: pokemon.stats.defense,
        special: pokemon.stats.special,
        speed: pokemon.stats.speed,
      },
      moves: [pokemon.moves[0], pokemon.moves[1], pokemon.moves[2], pokemon.moves[3]],
    };
    return obj;
  }

  return (
    <div className="fight-main-container">
      <div
        style={
          fightView === "battleInit"
            ? {
                position: "absolute",
                top: `${battleInit[pointerPositionIndex].top}px`,
                left: `${battleInit[pointerPositionIndex].left}px`,
              }
            : {
                position: "absolute",
                top: `${selectMoves[pointerPositionIndex].top}px`,
                left: `${selectMoves[pointerPositionIndex].left}px`,
              }
        }>
        <Pointer />
      </div>
      <div className="relativeP">
        <FightBackgrond />
      </div>

      {pokiParty.length ? <OpponentInFight data={opponentsPokemon} /> : null}
      {pokiParty.length ? <PlayerInFight data={playersPokemon} /> : null}
    </div>
  );
};

export default Fight;
