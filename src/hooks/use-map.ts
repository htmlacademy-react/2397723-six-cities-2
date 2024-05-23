import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map } from 'leaflet';
import { City } from '../types/offer';
import { createLayer } from '../utils/common';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City | undefined
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (city && mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });
      instance.addLayer(createLayer());
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
