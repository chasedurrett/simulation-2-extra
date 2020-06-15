import { createStore } from "redux";
const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  img: "",
  mortgage: "",
  rent: "",
};

export const STEP_ONE = "STEP_ONE";
export const STEP_TWO = "STEP_TWO";
export const STEP_THREE = "STEP_THREE";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case STEP_ONE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export default createStore(reducer);
