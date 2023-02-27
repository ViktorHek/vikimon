import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Player from "../components/player/Player";
import Backpack from "./Backpack";

const OpenWorld = () => {
  const { playermovement } = useSelector((state) => state);
  const [mapPos, setMapPos] = useState(playermovement.map);
  const [mapFolder, setMapFolder] = useState("palletTown");
  const [mapFile, setMapFile] = useState("main");

  useEffect(() => {
    handleMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playermovement.map, playermovement.img]);

  function handleMap() {
    setMapPos(playermovement.map);
    let folder = playermovement.img.folder;
    let file = playermovement.img.file;
    if (!folder || !file) return;
    setMapFolder(folder);
    setMapFile(file);
  }

  return (
    <div className="relativeP">
      <Player />
      <Backpack />
      <div className="map_container">
        <div className="display_map_container">
          <img
            src={`/images/maps/${mapFolder}/${mapFile}.jpg`}
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
