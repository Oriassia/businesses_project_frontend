import api from "../../src/services/api.service";
import { GET_BUSINESSES } from "../actionTypes";

export function getBusinesses() {
  return async (dispatch: any) => {
    try {
      const { data } = await api.get("/business");
      dispatch({ type: GET_BUSINESSES, payload: data });
    } catch (error) {
      console.error("Error fetching businesses data:", error);
    }
  };
}
