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

function getRandomInteger(amount: number): number {
  const lower = Math.ceil(Math.min(0, amount));
  const upper = Math.floor(Math.max(0, amount));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomIndexes(maxCount: number, amount: number): number[] {
  const chosenIndexes: number[] = [];
  while (chosenIndexes.length < maxCount) {
    let currentIndex = getRandomInteger(amount - 1);
    while (chosenIndexes.includes(currentIndex)) {
      currentIndex = getRandomInteger(amount);
    }
    chosenIndexes.push(currentIndex);
  }
  return chosenIndexes;
}

export function getRandomNearPlaces(maxCount: number, nearPlaces: OfferData[]): OfferData[] {
  if (nearPlaces.length <= maxCount) {
    return nearPlaces;
  }
  const chosenPlaces = [];
  const randomIndexes = getRandomIndexes(maxCount, nearPlaces.length);
  for (let i = 0; i < randomIndexes.length; i++) {
    chosenPlaces.push(nearPlaces[randomIndexes[i]]);
  }
  return chosenPlaces;
}
