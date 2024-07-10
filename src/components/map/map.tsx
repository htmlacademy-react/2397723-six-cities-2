import React, { useRef, useEffect, memo } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const/const';
import 'leaflet/dist/leaflet.css';
import {
  useAppSelector,
  useMap
} from '../../hooks';
import { getActiveCity, getHoveredOffer } from '../../store/app-data/app-data.selectors';
import { getOffersByCity } from '../../store/offers-data/offers-data.selectors';
import classNames from 'classnames';
import { OfferData } from '../../types';

type Props = {
  offers: OfferData[];
  className: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function MapComponent({ className, offers }: Props): React.JSX.Element {
  const city = useAppSelector(getActiveCity);
  const hoveredOffer = useAppSelector(getHoveredOffer);
  // const offersByCity = useAppSelector(getOffersByCity);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map && city) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            hoveredOffer !== undefined && offer.id === hoveredOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, hoveredOffer, city]);

  return <section className={classNames(className, 'map')} ref={mapRef}></section>;
}

export const Map = memo(MapComponent);
