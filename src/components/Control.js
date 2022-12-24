import React, { useEffect, useState } from 'react';
import { Slider } from '@material-ui/core';

const Control = ({ controls, setControls }) => {
  const handleChange = (e, i) => {
    console.log(parseFloat(e.target.value), i);
    let newControls = [...controls];
    newControls.splice(i, 1, {
      ...controls[i],
      value: parseFloat(e.target.value),
    });
    console.log(newControls);
    // controls[i].value = parseFloat(e.target.value);
    setControls([...newControls]);
  };
  let controlsDom = [];
  for (let i in controls) {
    i = parseInt(i);
    if (controls[i].type === 'slider') {
      controlsDom.push(
        <div id={`control-${controls[i].id}`} key={i}>
          <div className="label-wrapper">
            <label htmlFor={`control-${controls[i].id}-slider`}>
              Delta {controls[i].name}
            </label>
            <input
              type="text"
              value={controls[i].value}
              onChange={(e) => handleChange(e, i)}
              style={{ width: '30px' }}
            />
          </div>
          <input
            type="range"
            className="slider"
            id={`control-${controls[i].id}-slider`}
            value={controls[i].value}
            onChange={(e) => handleChange(e, i)}
            aria-labelledby="continuous-slider"
            min={controls[i].bounds[0]}
            max={controls[i].bounds[1]}
            step={'step' in controls[i] ? controls[i].step : 1}
          />
        </div>
      );
    }
  }
  return (
    <>
      <div id="control">
        <div className="wrapper0">{controlsDom}</div>
      </div>
    </>
  );
};

export default Control;
