import { CityName } from '../const/const';
import { Offer } from '../types/offer';

export function ratingToPercent(rating: number): string {
  return `${rating / 5 * 100}%`;
}

export function getCityOffers(cityName: CityName, favoriteOffers: Offer[]): Offer[] | undefined {
  return favoriteOffers.filter((offer: Offer): boolean => offer.city.name === cityName);
}
