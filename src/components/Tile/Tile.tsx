import React, { FC, MouseEvent } from "react";
import classnames from "classnames";
import "./Tile.scss";

interface TileProps {
  isSelected: boolean;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const Tile: FC<TileProps> = ({ isSelected, onClick }) => (
  <div
    className={classnames("Tile", { "Tile--selected": isSelected })}
    onClick={onClick}
    data-testid="tile"
  />
);

export default Tile;
