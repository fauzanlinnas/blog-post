import React from "react";
import { StateToProps, DispatchToProps } from "./container";
import Posts from "..";

export default function PostsContainer() {
  return (
    <StateToProps.Provider>
      <DispatchToProps.Provider>
        <Posts />
      </DispatchToProps.Provider>
    </StateToProps.Provider>
  );
}
