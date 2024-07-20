// business.types.ts

export interface Business {
  _id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  contactInfo: ContactInfo;
  rating: number;
  reviews: string[];
  summOfReviews: number;
}

export interface ContactInfo {
  openAt: string;
  closeAt: string;
  address: string;
  phoneNumber: string;
  websiteLink: string;
}
