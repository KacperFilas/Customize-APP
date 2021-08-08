import './Customizer.css';
import React, { Suspense, useEffect, useRef, useState } from 'react';

import { Canvas } from '@react-three/fiber';

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import { connect } from 'react-redux';
import { setActiveElement } from '../state/action-creators';

import { patch, post } from '../api/apiCalls';

import Controller from '../models/Ps5controller';
import Chromepicker from './color-picker';

const Customizer = ({ activeElement, setActiveElement }) => {
  const [mesh, setMesh] = useState(null);
  const [currentColors, setCurrentColors] = useState(null);

  const colorPicker = useRef(null);
  const myCamera = useRef(null);
  const orbit = useRef(null);

  useEffect(() => {
    if (activeElement) {
      if (activeElement.materials) {
        setCurrentColors(activeElement.materials);
      }
    } else {
      return;
    }
  }, [activeElement]);

  // show hide logic for color picker
  useEffect(() => {
    if (!mesh) {
      colorPicker.current.classList.add('hide');
    } else {
      colorPicker.current.classList.remove('hide');
    }
  }, [mesh]);

  const setCameraToDefault = () => {
    const initialPos = {
      x: 0,
      y: 2.9999999999985,
      z: 0.0000030001333479095256,
    };
    const initialRot = { _x: -1.5707953267504475, _y: 0, _z: 0 };

    if (myCamera.current) {
      myCamera.current.position.set(initialPos.x, initialPos.y, initialPos.z);
      myCamera.current.rotation.set(
        initialRot._x,
        initialRot._y,
        initialRot._z
      );
    }
  };

  const storeCanvas = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (resolve) {
          const canvas = document.getElementById('canvas').firstChild;
          const dataUrl = canvas.toDataURL('image/webp', 0.4);
          resolve(dataUrl);
        } else {
          reject(console.error('CANT STORE THE IMAGE OF THE CANVAS!'));
        }
      }, 100);
    });
    return promise;
  };

  // store colors function passed to controller so it can save current colors
  const storeColors = (obj) => {
    let colors = {};
    for (const [key, value] of Object.entries(obj)) {
      let { r, g, b } = value.color;

      colors[key] = { r, g, b };
    }

    setCurrentColors(colors);
  };

  const postData = async () => {
    if (currentColors) {
      setCameraToDefault();

      const url = await storeCanvas();
      console.log(url);

      const res = await post({ currentColors, url });

      setActiveElement({ id: res[res.length - 1].id });
    } else {
      return;
    }
  };

  const patchData = async () => {
    if (currentColors) {
      setCameraToDefault();

      const url = await storeCanvas();
      console.log(url);

      const obj = { id: activeElement.id, materials: currentColors, img: url };

      await patch(obj);
    } else {
      return;
    }
  };

  return (
    <div className="customizer-container">
      <div className="color-picker-wrapper" ref={colorPicker}>
        <Chromepicker mesh={mesh} />
      </div>

      <Canvas id="canvas" shadows gl={{ preserveDrawingBuffer: true }}>
        <PerspectiveCamera
          ref={myCamera}
          makeDefault={true}
          position={[0, 3, 0]}
          rotation={[0, 0, 0]}
          zoom={0.8}
        />

        <OrbitControls
          ref={orbit}
          camera={myCamera.current}
          enablePan={false}
          minDistance={2}
          maxDistance={4}
        />

        <ambientLight intensity={0.1} />
        <spotLight intensity={0.5} position={[0, 1, -2]} />
        <Suspense fallback={null}>
          <Controller
            setMesh={setMesh}
            currentColors={currentColors}
            storeColors={storeColors}
          />
        </Suspense>
      </Canvas>
      <button
        className="save-button"
        onClick={activeElement ? patchData : postData}
      >
        Save
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeElement: state.activeElement,
  };
};

export default connect(mapStateToProps, { setActiveElement })(Customizer);
