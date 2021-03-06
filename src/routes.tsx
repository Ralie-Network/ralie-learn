import { HashRouter, Route, Switch } from "react-router-dom";
import React from "react";
import { WalletProvider } from "./contexts/wallet";
import { ConnectionProvider } from "./contexts/connection";
import { AccountsProvider } from "./contexts/accounts";
import { MarketProvider } from "./contexts/market";
import { AppLayout } from "./components/Layout";
import AppRoot from "./AppRoot";
import AppLoader from "./AppLoader";

import { FaucetView, HomeView } from "./views";

export function Routes() {
  return (
    <>
      <HashRouter basename={"/"}>
        <ConnectionProvider>
          <WalletProvider>
            <AccountsProvider>
              <MarketProvider>
                <AppLayout>
                 
                  <AppRoot>
                     <AppLoader />
                  </AppRoot>

                </AppLayout>
              </MarketProvider>
            </AccountsProvider>
          </WalletProvider>
        </ConnectionProvider>
      </HashRouter>
    </>
  );
}
