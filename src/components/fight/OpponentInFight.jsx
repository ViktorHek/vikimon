import { useSelector } from "react-redux";
import Font from "../../animatios/font/Font";
import HealthBar from "../../animatios/HealthBar";

const OpponentInFight = () => {
  const { battleObject } = useSelector((state) => state);
  console.log({battleObject})
  const maxHealth = battleObject.opponentMon.unBuffedStats.hp;
  let currentHp = battleObject.opponentMon.currentHp;

  return (
    <div className="fight-opponent-main-container">
      <div className="fight-opponent-name-container">
        <Font text={battleObject.opponentMon.name.toUpperCase()} />
      </div>
      <div className="fight-opponent-level-container">
        <Font text={JSON.stringify(battleObject.opponentMon.level)} />
      </div>
      <div className="fight-opponent-hp-container">
        <HealthBar data={{ curretnHelath: currentHp, maxHealth: maxHealth }} />
      </div>
      <div className="fight-opponent-mon-img-container">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${battleObject.opponentMon.id}.png`}
          alt="pokemon"
          className="absolute-size-100"
        />
      </div>
    </div>
  );
};

export default OpponentInFight;
