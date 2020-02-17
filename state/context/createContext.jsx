import React, { createContext, useReducer } from "react";
import anchorReducer from "../reducer/anchorReducer";

const StateManagerContext = createContext({});
const Provider = StateManagerContext.Provider;

export const StateManagerProvider = ({ children }) => {
  const [anchorState, dispatchAnchor] = useReducer(anchorReducer, {});
  const makeAnchor = (anchorId, ref) => {
    if (!!ref && anchorId) {
      dispatchAnchor([anchorId, ref]);
    }
  };

  return <Provider value={{ anchors: anchorState, makeAnchor }}>{children}</Provider>;
};

export default StateManagerContext;
