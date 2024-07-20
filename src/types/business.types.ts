interface IContactInfo {
  address: string;
  phoneNumber: string;
  websiteLink: string;
}

export interface IBusiness {

  _id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  contactInfo: IContactInfo[];
  rating: number;
  reviews: string[];
  createdAt?: string;
}
