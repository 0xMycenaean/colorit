import { BurnerProvider, useBurner } from "@dojoengine/create-burner";
import { ReactNode, createContext, useContext, useMemo } from "react";
import { Account, RpcProvider } from "starknet";
import { SetupResult } from "./dojo/setup";

interface DojoContextType extends SetupResult {
  masterAccount: Account;
}

const DojoContext = createContext<DojoContextType | null>(null);

const requiredEnvs = [
  "VITE_PUBLIC_MASTER_ADDRESS",
  "VITE_PUBLIC_MASTER_PRIVATE_KEY",
  "VITE_PUBLIC_ACCOUNT_CLASS_HASH",
];

for (const env of requiredEnvs) {
  if (!import.meta.env[env]) {
    throw new Error(`Environment variable ${env} is not set!`);
  }
}

type DojoProviderProps = {
  children: ReactNode;
  value: SetupResult;
};

export const DojoProvider = ({ children, value }: DojoProviderProps) => {
  const currentValue = useContext(DojoContext);
  if (currentValue) throw new Error("DojoProvider can only be used once");

  const rpcProvider = useMemo(
    () =>
      new RpcProvider({
        nodeUrl:
          import.meta.env.VITE_PUBLIC_NODE_URL || "http://localhost:5050",
      }),
    []
  );
  const masterAddress = import.meta.env.VITE_PUBLIC_MASTER_ADDRESS;
  const privateKey = import.meta.env.VITE_PUBLIC_MASTER_PRIVATE_KEY;
  const accountClassHash = import.meta.env.VITE_PUBLIC_ACCOUNT_CLASS_HASH;
  const masterAccount = useMemo(
    () => new Account(rpcProvider, masterAddress, privateKey),
    [rpcProvider, masterAddress, privateKey]
  );

  return (
    <BurnerProvider
      initOptions={{ masterAccount, accountClassHash, rpcProvider }}
    >
      <DojoContext.Provider value={{ ...value, masterAccount }}>
        {children}
      </DojoContext.Provider>
    </BurnerProvider>
  );
};

export const useDojo = () => {
  const contextValue = useContext(DojoContext);
  if (!contextValue)
    throw new Error("The `useDojo` hook must be used within a `DojoProvider`");

  const {
    create,
    list,
    get,
    account,
    select,
    isDeploying,
    clear,
    copyToClipboard,
    applyFromClipboard,
  } = useBurner();

  return {
    setup: contextValue,
    account: {
      create,
      list,
      get,
      select,
      clear,
      account: contextValue.masterAccount,
      isDeploying,
      copyToClipboard,
      applyFromClipboard,
    },
  };
};

/**
 * 
 * 0x07b3e05f48f0c69e4a65ce5e076a66271a527aff2c34ce1083ec6e1526997a69

| Contract        | Account Contract
| Class Hash      | 0x04d07e40e93398ed3c76981e72dd1fd22557a78ce36c0515f679e27f0bb5bc5f
    
        
PREFUNDED ACCOUNTS
==================

| Account address |  0x517ececd29116499f4a1b64b094da79ba08dfd54a3edaa316134c41f8160973 
| Private key     |  0x1800000000300000180000000000030000000000003006001800006600
| Public key      |  0x2b191c2f3ecf685a91af7cf72a43e7b90e2e41220175de5c4f7498981b10053
 */
