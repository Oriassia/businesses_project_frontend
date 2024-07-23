import { GET_BUSINESSES, GET_BUSINESSES_COUNT } from "../../store/actionTypes";
import {
  BusinessActionTypes,
  BusinessesInitialStateType,
  IBusiness,
} from "../../src/types/business.types";

const BUSINESS_INITIAL_STATE: BusinessesInitialStateType = {
  businesses: null,
  businessesCount: null,
};

// Reducer function
function businessReducer(
  state = BUSINESS_INITIAL_STATE,
  action: BusinessActionTypes
): BusinessesInitialStateType {
  switch (action.type) {
    case GET_BUSINESSES:
      return { ...state, businesses: action.payload as IBusiness[] };
    case GET_BUSINESSES_COUNT:
      return { ...state, businessesCount: action.payload as number };

    default:
      return state;
  }
}

export default businessReducer;
