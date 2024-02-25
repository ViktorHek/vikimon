import React from "react";
import MenuBackgrond from "../../animatios/backgronds/MenuBackgrond";
import Font from "../../animatios/font/Font";
import { useSelector } from "react-redux";

const OptionsFight = () => {
  const { pointerPosition, battleObject } = useSelector((state) => state);
  let moves = battleObject.playerMon.moves
  const position = { top: 0, left: 0, right: 120, bottom: 40 };
  const position2 = { top: 0, left: 0, right: 80, bottom: 32 };

  const attacklist = moves.map((move, index) => {
    let className = `fight-move-selecter-${index}`;
    return (
      <div className={className} key={move.id}>
        <Font text={move.name} />
      </div>
    );
  });

  return (
    <div className="fight-main-options-container">
      <div className="fight-select-moves-img-container-1">
        <MenuBackgrond position={position} />
      </div>
      <div className="fight-select-moves-img-container-2">
        <MenuBackgrond position={position2} />
        <div style={{ marginTop: "8px", marginLeft: "8px", marginRight: "auto" }}>
          <Font text="TYPE/" />
        </div>
        <div style={{ marginLeft: "16px" }}>
          <Font text={`${moves[pointerPosition.index].type.toUpperCase()}`} />
        </div>
        <div style={{ marginLeft: "38px" }}>
          <Font text={`${moves[pointerPosition.index].pp}/30`} />
          {/* <Font text="20/30" /> */}
        </div>
      </div>
      <div className="attacks-options-container">{attacklist && attacklist}</div>
    </div>
  );
};

export default OptionsFight;
