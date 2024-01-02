import { overridableComponent } from "@latticexyz/recs";
import { SetupNetworkResult } from "./setupNetwork";

export type ClientComponents = ReturnType<typeof createClientComponents>;

export function createClientComponents({
  contractComponents,
}: SetupNetworkResult) {
  return {
    ...contractComponents,
    Cell: overridableComponent(contractComponents.Cell),
    Game: overridableComponent(contractComponents.Game),
    GameTurn: overridableComponent(contractComponents.GameTurn),
    Player: overridableComponent(contractComponents.Player),
  };
}
