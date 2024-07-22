import { Dispatch } from "react";
import api from "../../src/services/api.service";
import { GET_BUSINESSES } from "../actionTypes";
import { BusinessActionTypes } from "@/types/business.types";

export function getBusinesses() {
  return async (dispatch: Dispatch<BusinessActionTypes>) => {
    try {
      const { data } = await api.get("/businesses");
      dispatch({ type: GET_BUSINESSES, payload: data });
    } catch (error) {
      console.error("Error fetching businesses data:", error);
    }
  };
}
