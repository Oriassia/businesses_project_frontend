import { Dispatch } from "react";
import api from "../../src/services/api.service";
import { GET_BUSINESSES, GET_BUSINESSES_COUNT } from "../actionTypes";
import {
  BusinessActionTypes,
  IGetBusinessesOptions,
} from "@/types/business.types";

export function getBusinesses(options: IGetBusinessesOptions | null = null) {
  return async (dispatch: Dispatch<BusinessActionTypes>) => {
    try {
      const res = await api.get("/businesses/count", options!);
      dispatch({ type: GET_BUSINESSES_COUNT, payload: res.data.count });
      const { data } = await api.get("/businesses", options!);
      dispatch({ type: GET_BUSINESSES, payload: data });
    } catch (error) {
      console.error("Error fetching businesses data:", error);
    }
  };
}
