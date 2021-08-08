import './color-picker.css';
import React, { useEffect, useRef, useState } from 'react';
import { ChromePicker } from 'react-color';

const Chromepicker = (props) => {
  const [state, setState] = useState('#333');
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (props.mesh) {
        const rgb = {
          r: props.mesh.color.r * 100,
          g: props.mesh.color.g * 100,
          b: props.mesh.color.b * 100,
        };

        setState(rgb);
      } else {
        return;
      }
    }
  }, [props.mesh]);

  // const initColor = () => {};

  const handleChange = (color) => {
    const rgb = {
      r: color.rgb.r / 100,
      g: color.rgb.g / 100,
      b: color.rgb.b / 100,
    };

    if (props.mesh) {
      props.mesh.color = rgb;
    }

    setState(color.rgb);
  };

  return (
    <ChromePicker color={state} onChange={handleChange} disableAlpha={true} />
  );
};

export default Chromepicker;
