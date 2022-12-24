import './css/style.css';
import './css/fonts.css';
import Canvas from './components/Canvas';
import Control from './components/Control';
import React, { useEffect, useState } from 'react';

function App() {
  const [controls, setControls] = useState([
    {
      name: 'Number of Points',
      id: 'points',
      type: 'slider',
      bounds: [1, 10],
      value: 1,
    },
    {
      name: 'a',
      id: 'a',
      type: 'slider',
      bounds: [0, 10],
      step: 0.01,
      value: 1,
    },
    {
      name: 'b',
      id: 'b',
      type: 'slider',
      bounds: [0, 10],
      step: 0.01,
      value: 1,
    },
    {
      name: 'c',
      id: 'c',
      type: 'slider',
      bounds: [0, 10],
      step: 0.01,
      value: 1,
    },
    {
      name: 'd',
      id: 'd',
      type: 'slider',
      bounds: [0, 10],
      step: 0.01,
      value: 1,
    },
  ]);

  const [points, setPoints] = useState([]);

  useEffect(() => {
    const getInitState = () => {
      let bounds = [
        document.getElementById('canvas').offsetWidth / 2,
        document.getElementById('canvas').offsetHeight / 2,
      ];
      let points = [];
      for (let i = 0; i < controls[0].value; i++) {
        points.push({
          XY: [Math.random() * bounds[0], Math.random() * bounds[1]],
        });
      }
    };
    getInitState();
  }, []);

  return (
    <div className="App">
      <Canvas points={points}></Canvas>
      <Control controls={controls} setControls={setControls}></Control>
    </div>
  );
}

export default App;
