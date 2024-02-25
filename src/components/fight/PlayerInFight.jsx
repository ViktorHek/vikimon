import { useSelector } from "react-redux";
import OptionsFight from "./OptionsFight";
import Font from "../../animatios/font/Font";
import HealthBar from "../../animatios/HealthBar";
import MenuBackgrond from "../../animatios/backgronds/MenuBackgrond";

// move functionality to fight.jsx and use redux for data transfer

const PlayerInFight = () => {
  const { secondaryView, battleObject } = useSelector((state) => state);
  const { id, level, name, unBuffedStats, currentHp } = battleObject.playerMon;
  const maxHealth = unBuffedStats.hp;
  const menuPositioning = { top: 0, left: 0, right: 88, bottom: 40 };

  return (
    <div>
      <div className="fight-users-mon-name-container">
        <Font text={name} />
      </div>
      <div className="fight-users-mon-level-container">
        <Font text={JSON.stringify(level)} />
      </div>
      <div className="fight-users-mon-health-bar-container">
        <HealthBar data={{ curretnHelath: currentHp, maxHealth: maxHealth }} />
      </div>
      <div className="fight-users-mon-hp-container">
        <Font text={JSON.stringify(currentHp)} />
        <Font text={JSON.stringify(maxHealth)} />
      </div>
      <div className="fight-users-mon-img-container">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/${id}.png`} alt="pokemon" className="absolute-size-100" />
      </div>
      {secondaryView === "textDisplay" && <MenuBackgrond position={menuPositioning} />}
      {secondaryView === "battleInit" && (
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
      {secondaryView === "selectMoves" && <OptionsFight />}
    </div>
  );
};

export default PlayerInFight;
