import React, { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { OfferData } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const/const';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks/redux-ts';
import { getActiveCity, getHoveredOffer } from '../../store/app-data/app-data.selectors';

type Props = {
  offers: OfferData[];
  renderingPage: string;
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

export default function Map({ offers, renderingPage }: Props): React.JSX.Element {
  const city = useAppSelector(getActiveCity);
  const hoveredOffer = useAppSelector(getHoveredOffer);
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

  return <section className={`${renderingPage}__map map`} ref={mapRef}></section>;
}
