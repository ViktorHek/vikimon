import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OptionsFight from "./OptionsFight";
import Font from "../../animatios/font/Font";
import HealthBar from "../../animatios/HealthBar";
import globals from "../../utils/globalVariables";
import MenuBackgrond from "../../animatios/backgronds/MenuBackgrond";

// move functionality to fight.jsx and use redux for data transfer

const PlayerInFight = ({ damage }) => {
  const dispatch = useDispatch();
  const { secondaryView, backKey, battleObject } = useSelector((state) => state);
  const [spriteUrl, setSpriteUrl] = useState("");
  const [view, setView] = useState("battleInit");
  let data = battleObject.playerMon
  const maxHealth = data.unBuffedStats.hp;
  const [health, setHealth] = useState(maxHealth);

  const { id, level, name } = data;
  const dbName = data.name;
  const menuPositioning = { top: 0, left: 0, right: 88, bottom: 40 };

  useEffect(() => {
    populateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (damage !== null) {
      applyAttack(damage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [damage]);

  function populateData() {
    console.log("init view: ", view);
    setPokemonImgUrl(id);
    setHealth(data.currentHp);
  }

  function applyAttack(damagePlayer) {
    let healthAfterDamage = health - damagePlayer;
    let healthPercent = healthAfterDamage / maxHealth;
    let healthPercentToPixel = healthPercent * 100;
    setHealth(healthAfterDamage);
    if (healthPercentToPixel < 1) {
      healthPercentToPixel = 0;
      playerPokemonFaint();
    } else {
      dispatch({
        type: "SET_PLAYER_CURRENT_HEALTH",
        payload: healthAfterDamage,
      });
    }
    // setDisplayHealth(healthPercentToPixel);
  }

  function playerPokemonFaint() {
    console.log("you die");
    dispatch({ type: "SET_MAIN_VIEW", payload: "openWorld" });
  }

  function setPokemonImgUrl(id) {
    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/${id}.png`;
    if (globals.noInternet) {
      imgUrl = "/images/pokemons/b_green-supgb_151_back.png";
    }
    setSpriteUrl(imgUrl);
  }

  useEffect(() => {
    handleBackKey();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backKey]);

  function handleBackKey() {
    if (!backKey) return;
    let payload = "battleInit";
    // setView(payload);
    dispatch({ type: "SET_SECONDARY_VIEW", payload: payload });
    // dispatch({ type: "SET_BACK_KEY", payload: false });
  }

  useEffect(() => {
    setView(secondaryView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondaryView]);

  return (
    <div>
      <div className="fight-users-mon-name-container">
        <Font text={name ? name : dbName.toUpperCase()} />
      </div>
      <div className="fight-users-mon-level-container">
        <Font text={JSON.stringify(level)} />
      </div>
      <div className="fight-users-mon-health-bar-container">
        <HealthBar data={{ curretnHelath: health, maxHealth: maxHealth }} />
      </div>
      <div className="fight-users-mon-hp-container">
        <Font text={JSON.stringify(health)} />
        <Font text={JSON.stringify(maxHealth)} />
      </div>
      <div className="fight-users-mon-img-container">
        <img src={spriteUrl} alt="pokemon" className="absolute-size-100" />
      </div>
      {view === "textDisplay" && <MenuBackgrond position={menuPositioning} />}
      {view === "battleInit" && (
        <div className="fight-init-options-menu-container">
          <MenuBackgrond position={menuPositioning} />
          <div className="fight-init-select-fight-text">
            <Font text="FIGHT" />
          </div>
          <div className="fight-init-select-pokemon-text">
            <Font text="MON" />
          </div>
          <div className="fight-init-select-item-text">
            <Font text="ITEM" />
          </div>
          <div className="fight-init-select-run-text">
            <Font text="RUN" />
          </div>
        </div>
      )}
      {view === "selectMoves" && <OptionsFight data={data} />}
    </div>
  );
};

export default PlayerInFight;
