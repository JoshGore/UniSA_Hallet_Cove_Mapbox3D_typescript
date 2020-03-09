import React, { useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam9zaGciLCJhIjoiY2s3am9lYzlwMDhsMTNrbGtiZjF0bDhwdSJ9.P7AnDzO_uMnrMeLAJxsFKQ';

const Map: React.FC = () => {
    const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: -35.07237,
    longitude: 138.49895,
    zoom: 14 
  });
  return (
    <ReactMapGL 
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
    <Source 
      id="mapillary-image-data" 
      type="vector" 
      tiles={[ "https://tiles.arcgis.com/tiles/Lmcs3aS4AodOs221/arcgis/rest/services/UniSA_Project_Live_Geoscience_Mapillary_Images_and_Paths_2/VectorTileServer/tile/{z}/{y}/{x}.pbf" ]}
    >
    </Source>
    <Layer
          id="mapillary_images"
          type="circle"
          source="mapillary-image-data" 
          source-layer="mapillary_images"
          paint={{
            'circle-radius': 3,
            'circle-color': 'hsla(220, 100%, 58%, 50%)',
            'circle-stroke-width': 1,
              'circle-stroke-color': 'hsla(220, 100%, 40%, 100%)',
          }} />
    <Layer
          id="mapillary_image_paths"
          type="line"
          source="mapillary-image-data" 
          source-layer="mapillary_image_paths"
          beforeId="mapillary_images"
          paint={{
            'line-color': 'hsla(220, 100%, 58%, 100%)',
              'line-width': 4,
              'line-blur': 1,
          }}
          />
  </ReactMapGL>
  );
}

export default Map;
