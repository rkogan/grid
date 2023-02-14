import { FC, useState, useEffect } from "react";
import Tile from "../Tile";
import "./Grid.scss";

interface GridProps {
  size: number;
}

const Grid: FC<GridProps> = ({ size }) => {
  const [minRow, setMinRow] = useState<number | undefined>(undefined);
  const [maxRow, setMaxRow] = useState<number | undefined>(undefined);
  const [minCol, setMinCol] = useState<number | undefined>(undefined);
  const [maxCol, setMaxCol] = useState<number | undefined>(undefined);

  const resetGrid = () => {
    setMinRow(undefined);
    setMaxRow(undefined);
    setMinCol(undefined);
    setMaxCol(undefined);
  };

  // resets grid if spacebar is pressed
  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (e.key === " " || e.code === "Space") {
        resetGrid();
      }
    };
    window.addEventListener("keyup", keyListener);

    return () => window.removeEventListener("keyup", keyListener);
  }, []);

  // resets grid if grid size is changed
  useEffect(() => {
    resetGrid();
  }, [size]);

  // calculates the bounding box of the clicked tiles
  const clickHandler = (row: number, col: number) => () => {
    setMinRow((currMinRow) => Math.min(currMinRow ?? row, row));
    setMaxRow((currMaxRow) => Math.max(currMaxRow ?? row, row));
    setMinCol((currMinCol) => Math.min(currMinCol ?? col, col));
    setMaxCol((currMaxCol) => Math.max(currMaxCol ?? col, col));
  };

  return (
    <>
      {[...Array(size)].map((_, row) => (
        <div key={row} className="Row">
          {[...Array(size)].map((_, col) => (
            <Tile
              key={`${row}_${col}`}
              isSelected={
                minRow !== undefined &&
                maxRow !== undefined &&
                minCol !== undefined &&
                maxCol !== undefined &&
                row >= minRow &&
                row <= maxRow &&
                col >= minCol &&
                col <= maxCol
              }
              onClick={clickHandler(row, col)}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Grid;
