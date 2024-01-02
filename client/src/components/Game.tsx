import React, { useState, useEffect } from "react";
import { IBox, IGameState } from "../types";
import Box from "./Box";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useComponentValue } from "@latticexyz/react";

// const initialGameState: IGameState = {
//   grid: new Array(12)
//     .fill(0)
//     .map(() =>
//       new Array(12).fill(null).map(() => Math.floor(Math.random() * 4))
//     ),
//   nclick: 0,
//   maxclick: 200,
//   colors: ["red", "blue", "green", "yellow"],
//   nrows: 12,
//   ncols: 12,
//   ncolors: 4,
// };

const Game: React.FC = ({
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

  console.log({ game_id, components });
  const gridArray: unknown[] = [];
  for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 12; j++) {
      const [x, y] = [BigInt(j), BigInt(i)];
      console.log(game_id, x, y, "ARG");
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

  console.log(gameState, "gameState");

  // const clickBox = (x: number, y: number) => {
  //   const newColor = gameState.grid[y][x];

  //   const oldColor = gameState.grid[0][0]; // Assuming the flood starts from the top-left corner

  //   // If the clicked color is the same as the current color, do nothing
  //   if (newColor === oldColor) return;

  //   // Update the number of clicks
  //   const newNClick = gameState.nclick + 1;
  //   if (newNClick > gameState.maxclick) return; // Check if max clicks reached

  //   // Create a copy of the grid to mutate
  //   let newGrid = [...gameState.grid];

  //   // Define the flood fill function
  //   const floodFill = (x: number, y: number) => {
  //     // Base cases
  //     if (x < 0 || x >= gameState.ncols || y < 0 || y >= gameState.nrows)
  //       return;
  //     if (newGrid[y][x] !== oldColor) return;

  //     // Change the color
  //     newGrid[y][x] = newColor; // Access with [y][x]

  //     // Recursively apply to neighbors
  //     floodFill(x + 1, y); // Right
  //     floodFill(x - 1, y); // Left
  //     floodFill(x, y + 1); // Down
  //     floodFill(x, y - 1); // Up
  //   };

  //   // Start the flood fill from the clicked box
  //   floodFill(0, 0); // Assuming the flood starts from the top-left corner
  //   // Update the game state
  //   setGameState({
  //     ...gameState,
  //     grid: newGrid,
  //     nclick: newNClick,
  //   });
  // };

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
            // move = async (signer: Account, colorTo: string, gameId: string)
            onClick={() => move(account, color, game_id)}
          />
        ));
      })}
      {/* Render boxes here */}
    </div>
  );
};

export default Game;
