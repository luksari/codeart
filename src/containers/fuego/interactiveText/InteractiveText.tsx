import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useSpring } from '@react-spring/core';
import { TextMesh } from '@src/components/three/textMesh/TextMesh';
import { fuegoPalette } from '@src/containers/fuego/FuegoContainer.utils';

export const InteractiveText = () => {
  const [toggleVal, setToggleVal] = useState(0);
  const [{ animValue }] = useSpring(
    () => ({
      animValue: toggleVal,
      config: { mass: 1, tension: 300, friction: 50, precision: 0.0001 },
    }),
    [toggleVal]
  );
  const [hovered, setHover] = useState(false);
  // Events
  const handleClick = useCallback(
    () => setToggleVal((toggle) => Number(!toggle)),
    [setToggleVal]
  );
  const handlePointerOver = useCallback(() => setHover(true), []);
  const handlePointerOut = useCallback(() => setHover(false), []);
  const initY = -1;

  const animScale = animValue.to([0, 1], [0.2, 0.4]);

  const animPosY = animValue.to([0, 1], [initY, -3]);
  const animColor = animValue.to([0, 1], ['#ffffff', '#D73502']);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  return (
    <group>
      <Suspense fallback={null}>
        <TextMesh
          position={[-3, initY, 8]}
          size={1}
          fontSize={16}
          color={animColor}
          onClick={handleClick}
          scale-y={animScale}
          position-y={animPosY}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          font="vogue"
        >
          Fuego
        </TextMesh>
      </Suspense>
    </group>
  );
};
