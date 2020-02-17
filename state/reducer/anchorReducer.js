import { Ref } from 'react'; 

const AnchorReducer = (
  state,
  action
) => {
  if (!action) {
    return state;
  }
  const [id, ref] = action;
  if (state[id] === ref) {
    return state;
  }
  return { ...state, [id]: ref };
};

export default AnchorReducer;