interface IContactInfo {
  address: string;
  phoneNumber: string;
  websiteLink: string;
  openAt: string;
  closeAt: string;
}

export interface Business {
  _id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  contactInfo: IContactInfo;
  rating: number;
  reviews: string[];
  createdAt?: string;
  summOfReviews: number;
}
