import { TOGGLE_MENU } from '../actions';

const initialState = {
  open: false
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_MENU:
      return { ...state, open: !state.open };
    default:
      return state;
  }
}
