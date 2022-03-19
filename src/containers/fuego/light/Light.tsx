export const Light = () => {
  return (
    <group>
      <ambientLight intensity={0.3} color="#ffffff" />
      <directionalLight position={[2, 1, 6]} intensity={0.6} color="#ffffff" />
      <pointLight position={[0, 0, 0]} intensity={4} color="#ffffff" />
    </group>
  );
};
