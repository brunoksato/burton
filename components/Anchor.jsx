import React, { useRef, useContext, useEffect } from "react";
import StateManagerContext from "../state/context/createContext";

const Anchor = props => {
  const anchorRef = useRef(null);
  const { makeAnchor } = useContext(StateManagerContext);
  useEffect(() => {
    if (props.anchorId && anchorRef) {
      makeAnchor(props.anchorId, anchorRef);
    }
  }, [anchorRef, makeAnchor, props.anchorId]);

  return (
    <div ref={anchorRef} id={props.anchorId}>
      {props.children}
    </div>
  );
};

export default Anchor;
