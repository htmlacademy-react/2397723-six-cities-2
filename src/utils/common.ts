import { TileLayer } from 'leaflet';
import { CityName } from '../const/const';
import { OfferData } from '../types';

export function ratingToPercent(rating: number): string {
  return `${Math.round(rating) / 5 * 100}%`;
}

export function getCityOffers(cityName: CityName, favoriteOffers: OfferData[]): OfferData[] | undefined {
  return favoriteOffers.filter((offer: OfferData): boolean => offer.city.name === cityName);
}

export function createLayer() {
  return new TileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }
  );
}

export function humanizeDate(date: string): string {
  const data = new Date(date);
  const year = data.getFullYear();
  const month = data.toLocaleString('en', { month: 'long' });
  return `${month} ${year}`;
}
