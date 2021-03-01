import React from 'react';
import AppRoot from "./AppRoot";
import AppLoader from "./AppLoader";
import "./App.less";

import { Routes } from "./routes";

function App(){
  return(
            
            <AppRoot>
              <Routes />
              <AppLoader />
            </AppRoot>
 

  )
}

export default App;