import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import RenderRoter from "./router/renderRouter";
// import { useStore } from "@/store/uses";
// import { AppContext } from "./AppContext";
// import {ipcRenderer} from 'electron'
// const {ipcRenderer} = window.require('electron')
function App() {
  // console.log(ipcRenderer)
  return (
    <BrowserRouter>
        <Switch>
          {/* <Redirect path="/" to="/login/login" /> */}
          <RenderRoter />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
