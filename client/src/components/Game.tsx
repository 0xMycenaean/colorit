import React, { useState, useEffect } from "react";
import { IBox, IGameState } from "../types";
import Box from "./Box";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useComponentValue } from "@latticexyz/react";

const Game = ({
  game_id,
  components,
  move,
  account,
}: {
  game_id: string;
  components: any;
  move: (account: any, color: string, game_id: string) => {};
  account: any;
}) => {
  const [gameState, setGameState] = useState<IGameState>({
    grid: [],
    nclick: 0,
    maxclick: 200,
    nrows: 12,
    ncols: 12,
    ncolors: 4,
  });

  const gridArray: unknown[] = [];
  for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 12; j++) {
      const [x, y] = [BigInt(j), BigInt(i)];
      const cellEntity = getEntityIdFromKeys([
        game_id ? BigInt(game_id.toString()) : BigInt("9999999999"),
        x,
        y,
      ]);
      const color = useComponentValue(components.Cell, cellEntity)?.color;
      gridArray.push(color.toString().toLowerCase());
    }
  }

  useEffect(() => {
    setGameState((gameState) => ({
      ...gameState,
      grid: gridArray.reduce((acc: string[][], color, i) => {
        if (i % 12 === 0) {
          acc.push([]);
        }
        acc[acc.length - 1].push(color as string);
        return acc;
      }, [] as string[]) as any,
    }));
  }, []);

  // Render your game based on the gameState
  return (
    <div
      id="game"
      style={{
        width: gameState.ncols * 40,
        height: gameState.nrows * 40,
        position: "relative",
      }}
    >
      {gameState.grid.map((row, y) => {
        return row.map((color, x) => (
          <Box
            key={`${x}-${y}`}
            x={x}
            y={y}
            color={color}
            onClick={() => move(account, color, game_id)}
          />
        ));
      })}
    </div>
  );
};

export default Game;
