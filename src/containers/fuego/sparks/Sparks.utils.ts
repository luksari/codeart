import * as THREE from 'three';

type GenerateSparksParams = {
  count: number;
  radius: number;
  colors: string[];
};

export const randySpark = () => Math.max(0.01, Math.random());

export const generateSparks = ({
  colors,
  count,
  radius,
}: GenerateSparksParams) => {
  return Array.from({ length: count }).map((_, idx) => {
    const pos = new THREE.Vector3(
      Math.cos(idx) * radius * randySpark(),
      Math.sin(idx) * radius * randySpark()
    );
    const noOfPoints = count * 2;
    const points = Array.from({ length: noOfPoints }).map((_, index) => {
      const angle = (index / count) * Math.PI * 2.2;
      return pos
        .add(
          new THREE.Vector3(
            Math.cos(angle) * radius * randySpark(),
            Math.sin(angle) * radius * randySpark(),
            0
          )
        )
        .clone();
    });
    const curve = new THREE.CatmullRomCurve3(points)
      .getPoints(count)
      .flatMap((vec) => vec.toArray());

    return {
      color: colors[Math.floor(colors.length * Math.random())],
      width: Math.max(0.001, Math.random() / 100),
      speed: Math.max(0.001, 0.002 * Math.random()),
      curve,
    };
  });
};
