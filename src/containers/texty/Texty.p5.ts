import p5Types from 'p5';

const characters = [
  ' ',
  '`',
  '.',
  ',-',
  "':",
  ';_~',
  '"',
  '*|',
  '!l',
  'T',
  '0',
  'M',
  ' ',
  '`',
  '.',
  ',-',
  "':",
  ';_~',
  '"',
  '*|',
  '!l',
  'T',
  '0',
  'M',
];

let ascii = ''; //empty string

let img: p5Types.Image;

export const textyPreload = (p: p5Types) => {
  img = p.loadImage('./images/kitty-pixeled.png');
};

export const textySetup = (p: p5Types, parent: Element) => {
  p.createCanvas(img.width, img.height).parent(parent);
  // p.image(img, 0, 0);
  p.textAlign(p.CENTER, p.CENTER);
  p.textFont('monospace', 8);
  p.textStyle(p.NORMAL);

  const res = img.width / 100;

  img.loadPixels();

  for (let y = 0; y < img.height; y += res) {
    for (let x = 0; x < img.width; x += res) {
      const sample = img.get(x, y);

      const all = sample[0] + sample[1] + sample[2];
      const conversion = p.floor(p.map(all, 0, 765, characters.length - 1, 0));

      ascii += characters[conversion];
    } //end x loop

    //at the end of each row, add a new line
    ascii += '\n';
  } //y loop
};

export const textyDraw = (p: p5Types) => {
  p.text(ascii, 200, 200);
};
