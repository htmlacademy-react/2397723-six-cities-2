import { OfferData } from '../types/offer';

function sortByRating(a: OfferData, b: OfferData) {
  return b.rating - a.rating;
}
function sortHighToLow(a: OfferData, b: OfferData) {
  return b.price - a.price;
}
function sortLowToHigh(a: OfferData, b: OfferData) {
  return a.price - b.price;
}

export const sorting: Record<string, (offers: OfferData[]) => OfferData[]> =
{
  'Popular': (offers: OfferData[]) => offers.slice(),
  'Price: high to low': (offers: OfferData[]) => offers.slice().sort(sortHighToLow),
  'Price: low to high': (offers: OfferData[]) => offers.slice().sort(sortLowToHigh),
  'Top rated first': (offers: OfferData[]) => offers.slice().sort(sortByRating),
};
