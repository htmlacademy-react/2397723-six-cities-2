type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type Host = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export type City = {
  name: string;
  location: Location;
}

export type OfferData = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type FullOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  images: string[];
  previewImage: string;
  goods: string[];
  host: Host;
  bedrooms: number;
  maxAdults: number;
}
