import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import Map from './app/Map';
import '../App.css';

const App: React.FC = () => {

  return (
    <div className="App">
      <Map />
    </div>
  );
  
}

export default App;
