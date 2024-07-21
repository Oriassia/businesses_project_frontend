import { GET_BUSINESSES } from "../../store/actionTypes";
import {
  BusinessActionTypes,
  BusinessesInitialStateType,
} from "../../src/types/business.types";

const BUSINESS_INITIAL_STATE: BusinessesInitialStateType = {
  businesses: null,
};

// Reducer function
function businessReducer(
  state = BUSINESS_INITIAL_STATE,
  action: BusinessActionTypes
): BusinessesInitialStateType {
  switch (action.type) {
    case GET_BUSINESSES:
      return { ...state, businesses: action.payload };

    default:
      return state;
  }
}

export default businessReducer;
