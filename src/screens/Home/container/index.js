import React from "react";
import { StateToProps, DispatchToProps } from "./container";
import Home from "..";

export default function HomeContainer() {
  return (
    <StateToProps.Provider>
      <DispatchToProps.Provider>
        <Home />
      </DispatchToProps.Provider>
    </StateToProps.Provider>
  );
}
