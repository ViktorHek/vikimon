import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../database/api";
import PlayerInFight from "../components/fight/PlayerInFight";
import OpponentInFight from "../components/fight/OpponentInFight";
// import availableKeys from "../utils/availableKeys";
// import useKeys from "../hooks/use-keys";
// import NavigateFight from "../funktionality/navigation/navigateFight";
import Pointer from "../animatios/Pointer";
import FightBackgrond from "../animatios/backgronds/FightBackgrond";
import pointerPositions from "../utils/pointerPositions";
import PokemonParty from "../components/backpack/PokemonParty";

const Fight = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const [pokiParty, setPokiParty] = useState([]);
  const [showPokemonParty, setShowPokemonParty] = useState(false);
  const [playersPokemon, setPlayersPokemon] = useState({});
  const [opponentsPokemon, setOpponentsPokemon] = useState({});
  const [pointerPositionIndex, setPointerPositionIndex] = useState(0);
  const [activeStatChangesArr, setActiveStatChangesArr] = useState([]);
  const {
    myPokemons,
    selectedAttackFronRedux,
    selectInFight,
    fightView,
    playerMonsHealth,
    pointerPosition
  } = selector;
  const { battleInit, selectMoves } = pointerPositions;

  useEffect(() => {
    populateParty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedAttackFronRedux) {
      calcDamage(selectedAttackFronRedux);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAttackFronRedux]);

  useEffect(() => {
    if (selectInFight) handleSelect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectInFight]);

  useEffect(() => {
    setPointerPositionIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fightView]);

  useEffect(() => {
    setPointerPositionIndex(pointerPosition.index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointerPosition.index]);

  async function populateParty() {
    let populatedPartyList = myPokemons;
    if (!populatedPartyList.length) {
      let localStorageString = localStorage.getItem("testParty");
      let responce = await api.callPokiParty(localStorageString);
      populatedPartyList = responce.data;
      dispatch({
        type: "POPULATE_POKEMON_PARTY",
        payload: populatedPartyList,
      });
    }
    setPlayersPokemon(populatedPartyList[0]);
    setOpponentsPokemon(populatedPartyList[0]);
    setPokiParty(populatedPartyList);
  }

  function handleSelect() {
    console.log("hello");
    if (showPokemonParty) setShowPokemonParty(false);
    dispatch({ type: "SET_SELECT_IN_FIGHT", payload: false });
  }
  /**
   * this function uses playersPokemon, opponentsPokemon from Redux.
   * @async makes a call to callDamageCalc
   * @param {{id: number, name: string}} attack curently only using id
   * @returns {void} dispatching to "SET_DAMAGE_TO_OPPONENT" & "SET_DAMAGE_TO_PLAYER"
   */
  async function calcDamage(attack) {
    if (!attack || !playersPokemon || !opponentsPokemon) {
      console.log(
        "missing swomething in calcDamges function",
        attack,
        playersPokemon,
        opponentsPokemon
      );
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
    let damageToOpponent = responce.data.playerAttack;
    let damageToPlayer = responce.data.opponentAttack;
    if (responce.data.statChanges.length) {
      let statChangesListFronAPI = [];
      responce.data.statChanges.forEach((el) => {
        statChangesListFronAPI.push(el);
      });
      setActiveStatChangesArr(statChangesListFronAPI);
    }
    dispatch({
      type: "SET_DAMAGE_TO_OPPONENT",
      payload: Math.floor(damageToOpponent),
    });
    dispatch({
      type: "SET_DAMAGE_TO_PLAYER",
      payload: Math.floor(damageToPlayer),
    });
    dispatch({ type: "SET_DAMAGE_TO_OPPONENT", payload: null });
    dispatch({ type: "SET_DAMAGE_TO_PLAYER", payload: null });
    dispatch({ type: "SET_SELECTED_ATTACK", payload: null });
  }

  function getPokiObjectForBattle(pokemon) {
    let obj = {
      id: pokemon.id,
      level: pokemon.level,
      abilities: pokemon.abilities,
      types: pokemon.dbData.types,
      status: "fine",
      stats: {
        hp: playerMonsHealth,
        attack: pokemon.stats.attack,
        defense: pokemon.stats.defense,
        special: pokemon.stats.special,
        speed: pokemon.stats.speed,
      },
      moves: [
        pokemon.moves[0],
        pokemon.moves[1],
        pokemon.moves[2],
        pokemon.moves[3],
      ],
    };
    return obj;
  }

  return (
    <div className="fight-main-container">
      {showPokemonParty && (
        <div className="relativeP">
          <PokemonParty />
        </div>
      )}
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
