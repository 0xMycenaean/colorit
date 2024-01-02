import { useDojo } from "./DojoContext";
import { useComponentValue } from "@latticexyz/react";
import { Entity } from "@latticexyz/recs";
import { useEffect, useState } from "react";
import {
  getEntityIdFromKeys,
  setComponentsFromGraphQLEntities,
} from "@dojoengine/utils";
import { Direction } from "./utils";
import Game from "./components/Game";

const WIDTH = 12;
const HEIGHT = 12;

function App() {
  const {
    setup: {
      systemCalls: { spawn, move },
      components,
      network: { graphSdk, contractComponents },
    },
    account: { create, list, select, account, isDeploying, clear },
  } = useDojo();

  // extract query
  const { getEntities } = graphSdk();

  // entity id - this example uses the account address as the entity id
  const accountIdEntity = getEntityIdFromKeys([
    BigInt(account.address.toString()),
  ]);
  const game_id = useComponentValue(
    components.Player,
    accountIdEntity
  )?.game_id;

  // use graphql to current state data
  useEffect(() => {
    if (!accountIdEntity) return;

    const fetchData = async () => {
      try {
        const { data } = await getEntities();
        if (data && data.entities) {
          setComponentsFromGraphQLEntities(
            contractComponents,
            data.entities.edges
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [accountIdEntity, contractComponents]);

  return (
    <>
      <div>
        <button onClick={create}>
          {isDeploying ? "deploying burner" : "create burner"}
        </button>
        <button onClick={clear}>clear burners</button>
      </div>

      {game_id && (
        <Game
          account={account}
          move={move}
          game_id={game_id}
          components={components}
        />
      )}
      <div className="card">select signer: s</div>
      <div className="card">
        <button onClick={() => spawn(account)}>Spawn</button>
      </div>
    </>
  );
}

export default App;
