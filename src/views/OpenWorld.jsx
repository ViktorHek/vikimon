import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Player from "../components/player/Player";
import Backpack from "./Backpack";

const OpenWorld = () => {
  const { playermovement } = useSelector((state) => state);
  const [mapPos, setMapPos] = useState(playermovement.map);
  let mapImg = "/images/maps/Pallet_Town_Outside.jpg";

  useEffect(() => {
    setMapPos(playermovement.map);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playermovement]);

  return (
    <div className="relativeP">
      <Player />
      <Backpack />
      <div className="map_container">
        <div className="display_map_container">
          <img
            src={mapImg}
            alt="error"
            style={{
              width: "320px",
              height: "288px",
              position: "absolute",
              left: `-${mapPos.x * 16}px`,
              top: `-${mapPos.y * 16}px`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OpenWorld;
