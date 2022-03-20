export const Light = () => {
  return (
    <group>
      <ambientLight intensity={0.3} color="#FFFEA3" />
      <directionalLight position={[2, 1, 6]} intensity={0.6} color="#FFD897" />
      <pointLight position={[0, 0, 0]} intensity={4} color="#FF7C66" />
    </group>
  );
};
