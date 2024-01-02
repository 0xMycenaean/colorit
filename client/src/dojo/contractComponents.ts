/* Autogenerated file. Do not edit manually. */

import { defineComponent, Type as RecsType, World } from "@latticexyz/recs";

export function defineContractComponents(world: World) {
  return {
    Moves: (() => {
      return defineComponent(
        world,
        {
          player: RecsType.String,
          remaining: RecsType.Number,
          last_direction: RecsType.Number,
        },
        {
          metadata: {
            name: "Moves",
            types: ["Direction"],
          },
        }
      );
    })(),
    Position: (() => {
      return defineComponent(
        world,
        {
          player: RecsType.String,
          //@ts-ignore
          vec: { x: RecsType.Number, y: RecsType.Number },
        },
        {
          metadata: {
            name: "Position",
            types: ["Vec2"],
          },
        }
      );
    })(),
  };
}