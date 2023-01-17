import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OptionsFight from "./OptionsFight";
import Font from "../../animatios/font/Font";
import HealthBar from "../../animatios/HealthBar";

const PlayerInFight = ({ data }) => {
  const dispatch = useDispatch();
  const { fightView, backKey, damagePlayer } = useSelector((state) => state);
  const [spriteUrl, setSpriteUrl] = useState("");
  const [view, setView] = useState("battleInit");
  const maxHealth = data.stats.hp;
  const [health, setHealth] = useState(maxHealth);

  const { id, level, name } = data;
  const dbName = data.dbData.name;

  useEffect(() => {
    populateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (damagePlayer !== null) {
      applyAttack(damagePlayer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [damagePlayer]);

  function populateData() {
    setPokemonImgUrl(id);
    setHealth(data.stats.hp);
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
    dispatch({ type: "SET_VIEW", payload: "openWorld" });
  }

  function setPokemonImgUrl(id) {
    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/${id}.png`;
    if (!id) {
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
    setView(payload);
    dispatch({ type: "SET_FIGHT_VIEW", payload: payload });
    dispatch({ type: "SET_BACK_KEY", payload: false });
  }

  useEffect(() => {
    setView(fightView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fightView]);

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
      {view === "selectMoves" ? <OptionsFight data={data} /> : null}
    </div>
  );
};

export default PlayerInFight;
