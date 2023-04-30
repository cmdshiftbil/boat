import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGhlYmlsdGhlb3J5IiwiYSI6ImNsZG96ZXM5djB5YTczdG9sMDA2YzFyODMifQ.CN_NAt9FZNwQOMto51TAMA";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lat, setLat] = useState(25.033775035463425);
  const [lng, setLng] = useState(55.182549242626955);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/thebiltheory/cldp0skg9000k01qi4h397w10",
      center: [lng, lat],

      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,

      antialias: true,
    });

    map.current.on("style.load", () => {
      // Insert the layer beneath any symbol layer.
      const layers = map.current.getStyle().layers;
      const labelLayerId = layers.find(
        (layer) => layer.type === "symbol" && layer.layout["text-field"]
      ).id;

      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetMap.
      map.current.addLayer(
        {
          id: "add-3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#aaa",

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "height"],
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "min_height"],
            ],
            "fill-extrusion-opacity": 0.6,
          },
        },
        labelLayerId
      );
    });
  });

  return <div ref={mapContainer} className="h-full" />;
};

export default Map;
