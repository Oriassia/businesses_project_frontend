export interface IReview {
  _id: string;
  user: string;
  content: string;
  business: string;
  likes: string[];
  rating: number;
  createdAt?: string;
}
