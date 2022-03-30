import { sparksPalette } from '@src/containers/fuego/FuegoContainer.utils';

export const Light = () => {
  return (
    <group>
      <ambientLight intensity={0} color={sparksPalette[1]} />

      <pointLight
        color={sparksPalette[4]}
        intensity={1.5}
        position={[0, -5, 11]}
        shadow-mapSize={[125, 256]}
      />
    </group>
  );
};
