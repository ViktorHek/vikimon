import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlayerInFight from "../components/fight/PlayerInFight";
import OpponentInFight from "../components/fight/OpponentInFight";
import Pointer from "../animatios/Pointer";
import FightBackgrond from "../animatios/backgronds/FightBackgrond";
import pointerPositions from "../utils/pointerPositions";
import PokemonParty from "../components/backpack/PokemonParty";
import globals from "../utils/globalVariables";
import ConvertStringToPokemon from "../funktionality/conversion/convertStringToPokemon";
import calculator from "../funktionality/calculator/calculator";
import maps from "../maps/maps";

const Fight = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const [showPokemonParty, setShowPokemonParty] = useState(false); //
  const [pointerPositionIndex, setPointerPositionIndex] = useState(0);
  const [view, setView] = useState("battleInit");
  const [isLoaded, setIsLoaded] = useState(false);
  const { myPokemons, selectTarget, secondaryView, pointerPosition, battleObject, backKey } =
    selector;

  useEffect(() => {
    if (!isLoaded) populatePartyAndInitBattle();
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

  useEffect(() => {
    if (!backKey) handleBackKey();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backKey]);

  function handleBackKey() {
    dispatch({ type: "SET_SECONDARY_VIEW", payload: "battleInit" });
  }

  async function populatePartyAndInitBattle() {
    if (!battleObject) return;
    dispatch({ type: "SET_POINTER_POSITION", payload: { index: 0, view: "battleInit" } });
    dispatch({ type: "SET_SECONDARY_VIEW", payload: "battleInit" });
    let populatedPartyList = myPokemons;
    if (!populatedPartyList.length) {
      populatedPartyList = ConvertStringToPokemon(localStorage.getItem(globals.lsPokemonParty));
      dispatch({
        type: "POPULATE_POKEMON_PARTY",
        payload: populatedPartyList,
      });
    }
    let playerMon = populatedPartyList[0];
    let opponentMon = populatedPartyList[0];
    let user = {
      gymBadges: { attack: true, defense: true, special: true, speed: true },
    };
    let obj = calculator.createBattleObject(playerMon, opponentMon, user);
    console.log("1111", obj);
    dispatch({ type: "SET_BATTLE_OBJECT", payload: obj });
    if (isLoaded === false) setIsLoaded(!isLoaded);
  }

  function handleSelect(target) {
    switch (target) {
      case "move0":
      case "move1":
      case "move2":
      case "move3":
        dispatch({ type: "SET_SECONDARY_VIEW", payload: "battleInit" });
        dispatch({
          type: "SET_POINTER_POSITION",
          payload: { index: 0, view: "battleInit" },
        });
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
   * @param {string} attack format is move + index. for exampl 'move0'
   * @returns {void} dispatching to "SET_DAMAGE_TO_OPPONENT" & "SET_DAMAGE_TO_PLAYER"
   */
  function calcDamage(attack) {
console.log('4444',battleObject)
    if (!attack) return;
    let selectedAttack = battleObject.playerMon.moves[parseInt(attack.replace("move", ""))];
    let playerAttacksFirst = calculator.playerAttacksFirst(battleObject);
    let responce = calculator.getBothPlayersDamageCalc(
      battleObject,
      selectedAttack.id,
      playerAttacksFirst
    );
    console.log({ responce });
    let healthAfterDamage = battleObject.playerMon.currentHp - responce.opponentAttackCalc.damage;
    if (healthAfterDamage < 1) {
      playerPokemonFaint();
    } else {
      let obj = battleObject;
console.log({healthAfterDamage})
      obj.playerMon.currentHp = healthAfterDamage;
      console.log("222", obj);

      dispatch({ type: "SET_BATTLE_OBJECT", payload: obj });
    }
    console.log({ battleObject });
    let healthAfterDamage2 = battleObject.opponentMon.currentHp - responce.playerAttackCalc.damage;
    console.log({ healthAfterDamage2 });
    if (healthAfterDamage2 < 1) {
      console.log("ghero");
      opponentPokemonFaint();
    } else {
      console.log("####");
      let obj = battleObject;
      obj.opponentMon.currentHp = healthAfterDamage2;
      console.log("333", obj);

      dispatch({ type: "SET_BATTLE_OBJECT", payload: obj });
    }
  }

  function playerPokemonFaint() {
    console.log("you die");
    dispatch({ type: "SET_MAIN_VIEW", payload: "openWorld" });
  }

  function opponentPokemonFaint() {
    console.log("you win!");
    dispatch({ type: "SET_MAIN_VIEW", payload: "openWorld" });
  }

  return (
    <div className="fight-main-container">
      {showPokemonParty && (
        <div className="relativeP fight-main-poke-party-container">
          <PokemonParty />
        </div>
      )}
      {pointerPositions[view] && (
        <div
          className="fight-pointer-container"
          style={{
            position: "absolute",
            top: `${pointerPositions[view][pointerPositionIndex].top}px`,
            left: `${pointerPositions[view][pointerPositionIndex].left}px`,
          }}
        >
          <Pointer />
        </div>
      )}
      <div className="relativeP fight-main-background-container">
        <FightBackgrond />
      </div>
      {isLoaded && <OpponentInFight />}
      {isLoaded && <PlayerInFight />}
    </div>
  );
};

export default Fight;
