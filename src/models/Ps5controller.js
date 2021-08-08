import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Controller = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/ps5controller.glb');

  useEffect(() => {
    // On every click store colors so that it always is updated when user wants to save
    const func = (e) => {
      props.storeColors(materials);
    };

    // event listner that looks for a click on entie DOM
    document.addEventListener('click', func);
    return () => {
      document.removeEventListener('click', func);
    };
  }, [materials, props]);

  useEffect(() => {
    // Setting inintial values for the transparent buttons
    materials['Material.022'].opacity = 0.7;
    materials['Material.022'].transparent = true;
    materials['Material.022'].refractionRatio = 0.5;

    // If there are current color (if it is previously stored configuration) load from that.
    if (props.currentColors) {
      for (const [key, value] of Object.entries(props.currentColors)) {
        if (materials[key].color !== value) {
          materials[key].color = value;
        }
      }

      // If no colors set default colors of a controller.
    } else {
      materials['Material.001'].color = { r: 1, g: 1, b: 1 };
      materials['Material.002'].color = { r: 1, g: 1, b: 1 };
      materials['Material.004'].color = { r: 1, g: 1, b: 1 };
      materials['Material.013'].color = { r: 1, g: 1, b: 1 };
      materials['Material.014'].color = { r: 1, g: 1, b: 1 };
      materials['Material.017'].color = { r: 1, g: 1, b: 1 };
      materials['Material.018'].color = { r: 1, g: 1, b: 1 };
      materials['Material.019'].color = { r: 1, g: 1, b: 1 };
      materials['Material.020'].color = { r: 1, g: 1, b: 1 };
      materials['Material.021'].color = { r: 1, g: 1, b: 1 };
      materials['Material.022'].color = { r: 1, g: 1, b: 1 };
      materials['Material.023'].color = { r: 1, g: 1, b: 1 };
      materials['Material.024'].color = { r: 1, g: 1, b: 1 };
      materials['Material.025'].color = { r: 1, g: 1, b: 1 };
      materials['Material.026'].color = { r: 1, g: 1, b: 1 };
      materials['Material.027'].color = { r: 1, g: 1, b: 1 };
      materials['Material.027'].color = { r: 1, g: 1, b: 1 };
      materials['Material.028'].color = { r: 1, g: 1, b: 1 };
      materials['Material.029'].color = { r: 1, g: 1, b: 1 };
      materials['Material.030'].color = { r: 1, g: 1, b: 1 };
      materials['Material.003'].color = { r: 0.05, g: 0.05, b: 0.05 };
      materials['Material.016'].color = { r: 0.05, g: 0.05, b: 0.05 };
      materials['Material.015'].color = { r: 0.05, g: 0.05, b: 0.05 };
      materials['Material.005'].color = { r: 0.05, g: 0.05, b: 0.05 };
      materials['Material.006'].color = { r: 0.05, g: 0.05, b: 0.05 };
      materials['Material.007'].color = { r: 0.05, g: 0.05, b: 0.05 };
      materials['Material.008'].color = { r: 0.05, g: 0.05, b: 0.05 };
      materials['Material.013'].color = { r: 0.05, g: 0.05, b: 0.05 };
      materials['Material.009'].color = { r: 0.05, g: 0.05, b: 0.05 };
      materials['Material.010'].color = { r: 0.05, g: 0.05, b: 0.05 };
      materials['Material.011'].color = { r: 0.05, g: 0.05, b: 0.05 };
      materials['Material.012'].color = { r: 0.05, g: 0.05, b: 0.05 };
    }
  }, [materials, props.currentColors]);

  const onPointerOver = (e) => {
    e.stopPropagation();

    e.object.material.emissive = { r: 0, g: 0, b: 0.2 };
  };

  const onPointerOut = (e) => {
    e.object.material.emissive = { r: 0, g: 0, b: 0 };
  };

  const onPointerMissed = (e) => {
    props.setMesh(null);
  };

  // Select obejct that will be changed
  const onPointerDown = (e) => {
    e.stopPropagation();

    props.setMesh(e.object.material);

    e.object.material.emissive = { r: 0, g: 0, b: 0.5 };
  };

  const onPointerUp = (e) => {
    e.stopPropagation();
    e.object.material.emissive = { r: 0, g: 0, b: 0.2 };
  };

  return (
    <group
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onPointerMissed={onPointerMissed}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      ref={group}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Plane037.geometry}
        material={materials['Material.001']}
      />
      <mesh
        geometry={nodes.Plane037_1.geometry}
        material={materials['Material.002']}
      />
      <mesh
        geometry={nodes.Plane037_2.geometry}
        material={materials['Material.003']}
      />
      <mesh
        geometry={nodes.Plane037_3.geometry}
        material={materials['Material.004']}
      />
      <mesh
        geometry={nodes.Plane037_4.geometry}
        material={materials['Material.005']}
      />
      <mesh
        geometry={nodes.Plane037_5.geometry}
        material={materials['Material.006']}
      />
      <mesh
        geometry={nodes.Plane037_6.geometry}
        material={materials['Material.007']}
      />
      <mesh
        geometry={nodes.Plane037_7.geometry}
        material={materials['Material.008']}
      />
      <mesh
        geometry={nodes.Plane037_8.geometry}
        material={materials['Material.009']}
      />
      <mesh
        geometry={nodes.Plane037_9.geometry}
        material={materials['Material.010']}
      />
      <mesh
        geometry={nodes.Plane037_10.geometry}
        material={materials['Material.011']}
      />
      <mesh
        geometry={nodes.Plane037_11.geometry}
        material={materials['Material.012']}
      />
      <mesh
        geometry={nodes.Plane037_12.geometry}
        material={materials['Material.013']}
      />
      <mesh
        geometry={nodes.Plane037_13.geometry}
        material={materials['Material.014']}
      />
      <mesh
        geometry={nodes.Plane037_14.geometry}
        material={materials['Material.015']}
      />
      <mesh
        geometry={nodes.Plane037_15.geometry}
        material={materials['Material.016']}
      />
      <mesh
        geometry={nodes.Plane037_16.geometry}
        material={materials['Material.017']}
      />
      <mesh
        geometry={nodes.Plane037_17.geometry}
        material={materials['Material.018']}
      />
      <mesh
        geometry={nodes.Plane037_18.geometry}
        material={materials['Material.019']}
      />
      <mesh
        geometry={nodes.Plane037_19.geometry}
        material={materials['Material.020']}
      />
      <mesh
        geometry={nodes.Plane037_20.geometry}
        material={materials['Material.021']}
      />
      <mesh
        geometry={nodes.Plane037_21.geometry}
        material={materials['Material.022']}
      ></mesh>
      <mesh
        geometry={nodes.Plane037_22.geometry}
        material={materials['Material.023']}
      />
      <mesh
        geometry={nodes.Plane037_23.geometry}
        material={materials['Material.024']}
      />
      <mesh
        geometry={nodes.Plane037_24.geometry}
        material={materials['Material.025']}
      />
      <mesh
        geometry={nodes.Plane037_25.geometry}
        material={materials['Material.026']}
      />
      <mesh
        geometry={nodes.Plane037_26.geometry}
        material={materials['Material.027']}
      />
      <mesh
        geometry={nodes.Plane037_27.geometry}
        material={materials['Material.028']}
      />
      <mesh
        geometry={nodes.Plane037_28.geometry}
        material={materials['Material.029']}
      />
      <mesh
        geometry={nodes.Plane037_29.geometry}
        material={materials['Material.030']}
      />
    </group>
  );
};

useGLTF.preload('/ps5controller.glb');

export default Controller;
