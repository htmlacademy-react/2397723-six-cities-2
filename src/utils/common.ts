import { TileLayer } from 'leaflet';
import { CityName } from '../const/const';
import { Offer } from '../types/offer';

export function ratingToPercent(rating: number): string {
  return `${rating / 5 * 100}%`;
}

export function getCityOffers(cityName: CityName, favoriteOffers: Offer[]): Offer[] | undefined {
  return favoriteOffers.filter((offer: Offer): boolean => offer.city.name === cityName);
}

export const layer = new TileLayer(
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }
);
