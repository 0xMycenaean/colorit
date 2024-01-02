import { SetupNetworkResult } from "./setupNetwork";
import { Account } from "starknet";
import { Entity, getComponentValue } from "@latticexyz/recs";
import { uuid } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { Direction, updatePositionWithDirection } from "../utils";
import { getEvents, setComponentsFromEvents } from "@dojoengine/utils";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { execute, contractComponents }: SetupNetworkResult,
  { Game, Player }: ClientComponents
) {
  const spawn = async (signer: Account) => {
    const entityId = signer.address.toString() as Entity;

    // const cellId = uuid();
    // Cell.addOverride(cellId, {
    //   entity: entityId,
    //   value: { vec: { x: 10, y: 10 } },
    // });

    // const gameId = uuid();
    // Game.addOverride(gameId, {
    //   entity: entityId,
    //   value: { remaining: 10 },
    // });

    // try {
    console.log(signer.address, "signer.address");
    const { transaction_hash } = await execute(
      signer,
      "colorit::actions::actions",
      "spawn",
      [signer.address, signer.address]
    );

    const awaitedTx = await signer.waitForTransaction(transaction_hash, {
      retryInterval: 100,
    });

    console.log(awaitedTx, "awaitedTxawaitedTx");
    const events = getEvents(awaitedTx);

    console.log(events, "eventseventsevents");

    setComponentsFromEvents(contractComponents, events);

    // } catch (e) {
    //   console.log(e);
    //   Position.removeOverride(positionId);
    //   Moves.removeOverride(movesId);
    // } finally {
    //   Position.removeOverride(positionId);
    //   Moves.removeOverride(movesId);
    // }
  };

  const move = async (signer: Account, colorTo: string, gameId: string) => {
    const entityId = signer.address.toString() as Entity;
    console.log(colorTo.toLocaleUpperCase(), gameId, "ARGS");

    const tx = await execute(signer, "colorit::actions::actions", "color_it", [
      2,
      Number(gameId),
    ]);
    setComponentsFromEvents(
      contractComponents,
      getEvents(
        await signer.waitForTransaction(tx.transaction_hash, {
          retryInterval: 100,
        })
      )
    );
  };

  return {
    spawn,
    move,
  };
}
