import p5Types from 'p5';

const width = 700;
const height = 800;
const noOfCircles = 65;

const wait = 5000; // 5s

let time: number;
let currRotation = 70;
let cam: p5Types.Camera;

export const setupSombrero = (p: p5Types, canvasParentRef: Element) => {
  const x = p.createCanvas(width, height, p.WEBGL).parent(canvasParentRef);
  console.log(x);
  p.angleMode('degrees');
  p.pixelDensity(2.0);

  cam = p.createCamera();
  cam.setPosition(0, -5, 170);

  time = p.millis();
};

export const drawSombrero = (palette: string[]) => (p: p5Types) => {
  p.clear();
  if (p.millis() - time >= wait) {
    currRotation = p.random(65, 85);
    time = p.millis();
  }

  p.rotateX(currRotation);

  p.rotateY(p.sin(p.frameCount) * p.lerp(0, 25, 0.5));

  p.noFill();

  for (let i = 0; i < noOfCircles; i++) {
    const color = p.color(palette[i % 5]);
    p.stroke(color);

    p.strokeWeight(1.6);
    p.beginShape();

    for (let j = 0; j < 360; j += 15) {
      const radius = i + 2;
      const x = radius * p.sin(j);
      const y = radius * p.cos(j);
      const zScale = i <= 30 ? 75 : -20;
      const sinVal = i <= 30 ? 90 + i : 75;
      const transformZ = i <= 30 ? -50 : 10;

      const z = zScale * p.sin(sinVal + i) + transformZ;
      p.vertex(x, y, z);
    }
    p.endShape('close');
  }
};
