import { GET_BUSINESSES } from "store/actionTypes";

interface IContactInfo {
  address: string;
  phoneNumber: string;
  websiteLink: string;
  openAt: string;
  closeAt: string;
}
interface IUserReview {
  _id: string;
  username: string;
}

export interface IReview {
  _id: string;
  user: IUserReview;
  content: string;
  business: string;
  likes: number;
  rating: number;
  createdAt?: string;
}

export interface IBusiness {
  _id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  contactInfo: IContactInfo;
  rating: number;
  reviews: IReview[];
  createdAt?: string;
  summOfReviews: number;
}

export interface BusinessesInitialStateType {
  businesses: IBusiness[] | null;
}

export interface GetBusinessesAction {
  type: typeof GET_BUSINESSES;
  payload: IBusiness[];
}

export type BusinessActionTypes = GetBusinessesAction;
