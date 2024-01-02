import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ContractAddress: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Enum: { input: any; output: any; }
  felt252: { input: any; output: any; }
  u32: { input: any; output: any; }
};

export type Cell = {
  __typename?: 'Cell';
  color?: Maybe<Scalars['Enum']['output']>;
  entity?: Maybe<World__Entity>;
  game_id?: Maybe<Scalars['u32']['output']>;
  position?: Maybe<Cell_Vec2>;
};

export type CellConnection = {
  __typename?: 'CellConnection';
  edges?: Maybe<Array<Maybe<CellEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CellEdge = {
  __typename?: 'CellEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Cell>;
};

export type CellOrder = {
  direction: OrderDirection;
  field: CellOrderField;
};

export enum CellOrderField {
  Color = 'COLOR',
  GameId = 'GAME_ID',
  Position = 'POSITION'
}

export type CellWhereInput = {
  color?: InputMaybe<Scalars['Enum']['input']>;
  game_id?: InputMaybe<Scalars['u32']['input']>;
  game_idEQ?: InputMaybe<Scalars['u32']['input']>;
  game_idGT?: InputMaybe<Scalars['u32']['input']>;
  game_idGTE?: InputMaybe<Scalars['u32']['input']>;
  game_idLT?: InputMaybe<Scalars['u32']['input']>;
  game_idLTE?: InputMaybe<Scalars['u32']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u32']['input']>;
};

export type Cell_Vec2 = {
  __typename?: 'Cell_Vec2';
  x?: Maybe<Scalars['u32']['output']>;
  y?: Maybe<Scalars['u32']['output']>;
};

export type Game = {
  __typename?: 'Game';
  bottom?: Maybe<Scalars['ContractAddress']['output']>;
  entity?: Maybe<World__Entity>;
  game_id?: Maybe<Scalars['u32']['output']>;
  top?: Maybe<Scalars['ContractAddress']['output']>;
  winner?: Maybe<Scalars['Enum']['output']>;
};

export type GameConnection = {
  __typename?: 'GameConnection';
  edges?: Maybe<Array<Maybe<GameEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GameEdge = {
  __typename?: 'GameEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Game>;
};

export type GameOrder = {
  direction: OrderDirection;
  field: GameOrderField;
};

export enum GameOrderField {
  Bottom = 'BOTTOM',
  GameId = 'GAME_ID',
  Top = 'TOP',
  Winner = 'WINNER'
}

export type GameTurn = {
  __typename?: 'GameTurn';
  entity?: Maybe<World__Entity>;
  game_id?: Maybe<Scalars['u32']['output']>;
  player_starting_position?: Maybe<Scalars['Enum']['output']>;
};

export type GameTurnConnection = {
  __typename?: 'GameTurnConnection';
  edges?: Maybe<Array<Maybe<GameTurnEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GameTurnEdge = {
  __typename?: 'GameTurnEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<GameTurn>;
};

export type GameTurnOrder = {
  direction: OrderDirection;
  field: GameTurnOrderField;
};

export enum GameTurnOrderField {
  GameId = 'GAME_ID',
  PlayerStartingPosition = 'PLAYER_STARTING_POSITION'
}

export type GameTurnWhereInput = {
  game_id?: InputMaybe<Scalars['u32']['input']>;
  game_idEQ?: InputMaybe<Scalars['u32']['input']>;
  game_idGT?: InputMaybe<Scalars['u32']['input']>;
  game_idGTE?: InputMaybe<Scalars['u32']['input']>;
  game_idLT?: InputMaybe<Scalars['u32']['input']>;
  game_idLTE?: InputMaybe<Scalars['u32']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u32']['input']>;
  player_starting_position?: InputMaybe<Scalars['Enum']['input']>;
};

export type GameWhereInput = {
  bottom?: InputMaybe<Scalars['ContractAddress']['input']>;
  bottomEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  bottomGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  bottomGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  bottomLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  bottomLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  bottomNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  game_id?: InputMaybe<Scalars['u32']['input']>;
  game_idEQ?: InputMaybe<Scalars['u32']['input']>;
  game_idGT?: InputMaybe<Scalars['u32']['input']>;
  game_idGTE?: InputMaybe<Scalars['u32']['input']>;
  game_idLT?: InputMaybe<Scalars['u32']['input']>;
  game_idLTE?: InputMaybe<Scalars['u32']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u32']['input']>;
  top?: InputMaybe<Scalars['ContractAddress']['input']>;
  topEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  topGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  topGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  topLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  topLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  topNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  winner?: InputMaybe<Scalars['Enum']['input']>;
};

export type ModelUnion = Cell | Game | GameTurn | Player;

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Player = {
  __typename?: 'Player';
  address?: Maybe<Scalars['ContractAddress']['output']>;
  entity?: Maybe<World__Entity>;
  game_id?: Maybe<Scalars['u32']['output']>;
  startingPostion?: Maybe<Scalars['Enum']['output']>;
};

export type PlayerConnection = {
  __typename?: 'PlayerConnection';
  edges?: Maybe<Array<Maybe<PlayerEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PlayerEdge = {
  __typename?: 'PlayerEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Player>;
};

export type PlayerOrder = {
  direction: OrderDirection;
  field: PlayerOrderField;
};

export enum PlayerOrderField {
  Address = 'ADDRESS',
  GameId = 'GAME_ID',
  Startingpostion = 'STARTINGPOSTION'
}

export type PlayerWhereInput = {
  address?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  game_id?: InputMaybe<Scalars['u32']['input']>;
  game_idEQ?: InputMaybe<Scalars['u32']['input']>;
  game_idGT?: InputMaybe<Scalars['u32']['input']>;
  game_idGTE?: InputMaybe<Scalars['u32']['input']>;
  game_idLT?: InputMaybe<Scalars['u32']['input']>;
  game_idLTE?: InputMaybe<Scalars['u32']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u32']['input']>;
  startingPostion?: InputMaybe<Scalars['Enum']['input']>;
};

export type World__Content = {
  __typename?: 'World__Content';
  coverUri?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  iconUri?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Array<Maybe<World__Social>>>;
  website?: Maybe<Scalars['String']['output']>;
};

export type World__Entity = {
  __typename?: 'World__Entity';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  models?: Maybe<Array<Maybe<ModelUnion>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type World__EntityConnection = {
  __typename?: 'World__EntityConnection';
  edges?: Maybe<Array<Maybe<World__EntityEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__EntityEdge = {
  __typename?: 'World__EntityEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Entity>;
};

export type World__Event = {
  __typename?: 'World__Event';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type World__EventConnection = {
  __typename?: 'World__EventConnection';
  edges?: Maybe<Array<Maybe<World__EventEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__EventEdge = {
  __typename?: 'World__EventEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Event>;
};

export type World__Metadata = {
  __typename?: 'World__Metadata';
  content?: Maybe<World__Content>;
  coverImg?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  iconImg?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
  worldAddress: Scalars['String']['output'];
};

export type World__MetadataConnection = {
  __typename?: 'World__MetadataConnection';
  edges?: Maybe<Array<Maybe<World__MetadataEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__MetadataEdge = {
  __typename?: 'World__MetadataEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Metadata>;
};

export type World__Model = {
  __typename?: 'World__Model';
  classHash?: Maybe<Scalars['felt252']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['felt252']['output']>;
};

export type World__ModelConnection = {
  __typename?: 'World__ModelConnection';
  edges?: Maybe<Array<Maybe<World__ModelEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__ModelEdge = {
  __typename?: 'World__ModelEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Model>;
};

export type World__PageInfo = {
  __typename?: 'World__PageInfo';
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type World__Query = {
  __typename?: 'World__Query';
  cellModels?: Maybe<CellConnection>;
  entities?: Maybe<World__EntityConnection>;
  entity: World__Entity;
  events?: Maybe<World__EventConnection>;
  gameModels?: Maybe<GameConnection>;
  gameturnModels?: Maybe<GameTurnConnection>;
  metadatas?: Maybe<World__MetadataConnection>;
  model: World__Model;
  models?: Maybe<World__ModelConnection>;
  playerModels?: Maybe<PlayerConnection>;
  transaction: World__Transaction;
  transactions?: Maybe<World__TransactionConnection>;
};


export type World__QueryCellModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CellOrder>;
  where?: InputMaybe<CellWhereInput>;
};


export type World__QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryEntityArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryGameModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<GameOrder>;
  where?: InputMaybe<GameWhereInput>;
};


export type World__QueryGameturnModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<GameTurnOrder>;
  where?: InputMaybe<GameTurnWhereInput>;
};


export type World__QueryMetadatasArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryModelArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryPlayerModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PlayerOrder>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type World__QueryTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type World__Social = {
  __typename?: 'World__Social';
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type World__Subscription = {
  __typename?: 'World__Subscription';
  entityUpdated: World__Entity;
  eventEmitted: World__Event;
  modelRegistered: World__Model;
};


export type World__SubscriptionEntityUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type World__SubscriptionEventEmittedArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type World__SubscriptionModelRegisteredArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type World__Transaction = {
  __typename?: 'World__Transaction';
  calldata?: Maybe<Array<Maybe<Scalars['felt252']['output']>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  maxFee?: Maybe<Scalars['felt252']['output']>;
  nonce?: Maybe<Scalars['felt252']['output']>;
  senderAddress?: Maybe<Scalars['felt252']['output']>;
  signature?: Maybe<Array<Maybe<Scalars['felt252']['output']>>>;
  transactionHash?: Maybe<Scalars['felt252']['output']>;
};

export type World__TransactionConnection = {
  __typename?: 'World__TransactionConnection';
  edges?: Maybe<Array<Maybe<World__TransactionEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__TransactionEdge = {
  __typename?: 'World__TransactionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Transaction>;
};

export type GetEntitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntitiesQuery = { __typename?: 'World__Query', entities?: { __typename?: 'World__EntityConnection', edges?: Array<{ __typename?: 'World__EntityEdge', node?: { __typename?: 'World__Entity', keys?: Array<string | null> | null, models?: Array<{ __typename: 'Cell', game_id?: any | null, color?: any | null, position?: { __typename?: 'Cell_Vec2', x?: any | null, y?: any | null } | null } | { __typename: 'Game', game_id?: any | null } | { __typename: 'GameTurn' } | { __typename: 'Player', game_id?: any | null, address?: any | null } | null> | null } | null } | null> | null } | null };


export const GetEntitiesDocument = gql`
    query getEntities {
  entities(keys: ["*"], limit: 10000) {
    edges {
      node {
        keys
        models {
          __typename
          ... on Game {
            game_id
          }
          ... on Cell {
            game_id
            position {
              x
              y
            }
            color
          }
          ... on Player {
            game_id
            address
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetEntitiesDocumentString = print(GetEntitiesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getEntities(variables?: GetEntitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetEntitiesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetEntitiesQuery>(GetEntitiesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getEntities', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;