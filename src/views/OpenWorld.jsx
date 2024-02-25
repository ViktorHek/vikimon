import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Player from "../components/player/Player";
import Backpack from "./Backpack";
import maps from "../maps/maps";

const OpenWorld = () => {
  const { playermovement } = useSelector((state) => state);
  const [mapFile, setMapFile] = useState(maps[playermovement.img]);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  useEffect(() => {
    handlemapPosition(playermovement.map.x, playermovement.map.y);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playermovement.map.x, playermovement.map.y]);

  useEffect(() => {
    if (playermovement.img) setMapFile(maps[playermovement.img]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playermovement.img]);

  function handlemapPosition(x, y) {
    console.log(x,y)
    setLeft(16 - x * 16);
    setRight(16 - y * 16);
  }

  return (
    <div className="relativeP">
      <Player />
      <Backpack />
      <div className="map_container">
        <div className="display_map_container">
          <img
            src={mapFile.src}
            alt="error"
            style={{
              width: mapFile.width,
              height: mapFile.height,
              position: "absolute",
              left: `${left}px`,
              top: `${right}px`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OpenWorld;
