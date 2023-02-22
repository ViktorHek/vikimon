import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../database/api";
import PlayerInFight from "../components/fight/PlayerInFight";
import OpponentInFight from "../components/fight/OpponentInFight";
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
  const [playerDamage, setPlayerDamage] = useState(0);
  const [opponentDamage, setOpponentDamage] = useState(0);
  const [battleID, setBattleID] = useState(null);
  const [activeStatChangesArr, setActiveStatChangesArr] = useState([]);
  const { myPokemons, selectTarget, fightView, playerMonsHealth, pointerPosition } = selector;
  const { battleInit, selectMoves } = pointerPositions;

  useEffect(() => {
    console.log("hej");
    populatePartyAndInitBattle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectTarget) handleSelect(selectTarget);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectTarget]);

  useEffect(() => {
    setPointerPositionIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fightView]);

  useEffect(() => {
    setPointerPositionIndex(pointerPosition.index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointerPosition.index]);

  async function populatePartyAndInitBattle() {
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
    setOpponentsPokemon(populatedPartyList[1]);
    setPokiParty(populatedPartyList);
    let initBattlePayload = {
      playersPokemon: populatedPartyList[0],
      opponentsPokemon: populatedPartyList[1],
      user: { gymBadges: { attack: true, defense: true, special: true, speed: true } },
      statChanges: activeStatChangesArr,
    };
    let responce = await api.initBattle(initBattlePayload);
    console.log("data", responce.data);
    setBattleID(responce.data.battleId);
  }

  function handleSelect(target) {
    console.log('handle select: ', target)
    switch (target) {
      case "move0":
      case "move1":
      case "move2":
      case "move3":
        calcDamage(target);
        break;
      case "selectMoves":
        console.log("handle selectingMoves");
        break;
      case "selectPokemon":
        setShowPokemonParty(true);
        console.log("handle selectPokemon");
        break;
      case "selectItem":
        console.log("handle selectItem");
        break;
      case "runFromBattle":
        console.log("handle runFromBattle");
        break;
      default:
        console.log("no target in handleSelect @ Fight.jsx. target: ", target);
        return;
    }
  }
  /**
   * this function uses playersPokemon, opponentsPokemon from Redux.
   * @async makes a call to callDamageCalc
   * @param {string} attack format is move + index. for exampl 'move0'
   * @returns {void} dispatching to "SET_DAMAGE_TO_OPPONENT" & "SET_DAMAGE_TO_PLAYER"
   */
  async function calcDamage(attack) {
    if (!attack || !playersPokemon || !opponentsPokemon) return;
    let selectedAttack = playersPokemon.moves[parseInt(attack.replace("move", ""))];
    let payload = {
      battleId: battleID,
      moveId: selectedAttack.id,
    };
    let responce = await api.callDamageCalc(payload);
    console.log("responce", responce.data);
    let damageToOpponent = responce.data.playerAttack;
    let damageToPlayer = responce.data.opponentAttack;
    setPlayerDamage(Math.floor(damageToPlayer));
    setOpponentDamage(Math.floor(damageToOpponent));
    setPlayerDamage(null);
    setOpponentDamage(null);
  }

  // function getPokiObjectForBattle(pokemon) {
  //   let obj = {
  //     id: pokemon.id,
  //     level: pokemon.level,
  //     abilities: pokemon.abilities,
  //     types: pokemon.dbData.types,
  //     status: "fine",
  //     stats: {
  //       hp: playerMonsHealth,
  //       attack: pokemon.stats.attack,
  //       defense: pokemon.stats.defense,
  //       special: pokemon.stats.special,
  //       speed: pokemon.stats.speed,
  //     },
  //     moves: [pokemon.moves[0], pokemon.moves[1], pokemon.moves[2], pokemon.moves[3]],
  //   };
  //   return obj;
  // }

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
      {battleID !== null && <OpponentInFight data={opponentsPokemon} damage={opponentDamage} />}
      {battleID !== null && <PlayerInFight data={playersPokemon} damage={playerDamage} />}
    </div>
  );
};

export default Fight;
