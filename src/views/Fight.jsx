import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../database/api";
import PlayerInFight from "../components/fight/PlayerInFight";
import OpponentInFight from "../components/fight/OpponentInFight";
import Pointer from "../animatios/Pointer";
import FightBackgrond from "../animatios/backgronds/FightBackgrond";
import pointerPositions from "../utils/pointerPositions";
import PokemonParty from "../components/backpack/PokemonParty";
import globals from "../utils/globalVariables";

const Fight = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const [showPokemonParty, setShowPokemonParty] = useState(false);
  const [playersPokemon, setPlayersPokemon] = useState({});
  const [opponentsPokemon, setOpponentsPokemon] = useState({});
  const [pointerPositionIndex, setPointerPositionIndex] = useState(0);
  const [playerDamage, setPlayerDamage] = useState(0);
  const [opponentDamage, setOpponentDamage] = useState(0);
  const [battleID, setBattleID] = useState(null);
  const [view, setView] = useState("battleInit");
  const { myPokemons, selectTarget, secondaryView, pointerPosition } = selector;

  useEffect(() => {
    populatePartyAndInitBattle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectTarget) handleSelect(selectTarget);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectTarget]);

  useEffect(() => {
    if (secondaryView) setView(secondaryView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondaryView]);

  useEffect(() => {
    if (pointerPosition.view) setPointerPositionIndex(pointerPosition.index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointerPosition.index, pointerPosition.view]);

  async function populatePartyAndInitBattle() {
    dispatch({ type: "SET_POINTER_POSITION", payload: { index: 0, view: "battleInit" } });
    dispatch({ type: "SET_SECONDARY_VIEW", payload: "battleInit" });
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
    setPlayersPokemon(populatedPartyList[0]);
    setOpponentsPokemon(populatedPartyList[1]);
    let initBattlePayload = {
      playersPokemon: populatedPartyList[0],
      opponentsPokemon: populatedPartyList[1],
      user: { gymBadges: { attack: true, defense: true, special: true, speed: true } },
    };
    let responce = await api.initBattle(initBattlePayload);
    setBattleID(responce.data.battleId);
  }

  function handleSelect(target) {
    switch (target) {
      case "move0":
      case "move1":
      case "move2":
      case "move3":
        dispatch({ type: "SET_SECONDARY_VIEW", payload: "battleInit" });
        dispatch({ type: "SET_POINTER_POSITION", payload: { index: 0, view: "battleInit" } });
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
    console.log(responce.data)
    let damageToOpponent = responce.data.playerAttackCalc.damage;
    let damageToPlayer = responce.data.opponentAttackCalc.damage;
    setPlayerDamage(Math.floor(damageToPlayer));
    setOpponentDamage(Math.floor(damageToOpponent));
    setPlayerDamage(null);
    setOpponentDamage(null);
  }

  return (
    <div className="fight-main-container">
      {showPokemonParty && (
        <div className="relativeP fight-main-poke-party-container">
          <PokemonParty />
        </div>
      )}
      <div
        className="fight-pointer-container"
        style={{
          position: "absolute",
          top: `${pointerPositions[view][pointerPositionIndex].top}px`,
          left: `${pointerPositions[view][pointerPositionIndex].left}px`,
        }}>
        <Pointer />
      </div>
      <div className="relativeP fight-main-background-container">
        <FightBackgrond />
      </div>
      {battleID !== null && <OpponentInFight data={opponentsPokemon} damage={opponentDamage} />}
      {battleID !== null && <PlayerInFight data={playersPokemon} damage={playerDamage} />}
    </div>
  );
};

export default Fight;
