const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const { removeBackgroundFlood } = require('./cutout');

const brainDir = 'C:/Users/LAPTOP GODAM/.gemini/antigravity-ide/brain/401bdca5-3245-4dfd-ac29-1b6afa02b258';
const outDir = path.resolve(__dirname, '../public/images');

async function main() {
  console.log('Starting image processing...');

  // 1. Girl holding Frenchie
  fs.copyFileSync(
    path.join(brainDir, 'girl_holding_frenchie_1793185121374.jpg'),
    path.join(outDir, 'girl-frenchie.jpg')
  );
  console.log('Copied girl-frenchie.jpg');

  // 2. Beagle cutout
  await removeBackgroundFlood({
    input: path.join(outDir, 'beagle.jpg'),
    output: path.join(outDir, 'beagle.png'),
    tolerance: 30,
    cornerSample: [255, 255, 255]
  });

  // 3. Food bag cutout
  await removeBackgroundFlood({
    input: path.join(outDir, 'food-bag.jpg'),
    output: path.join(outDir, 'food-bag.png'),
    tolerance: 35,
    cornerSample: [255, 255, 255]
  });

  // 4. Peeking puppy cutout (remove top white background, crop bottom wooden bar)
  const puppySrc = path.join(brainDir, 'peeking_puppy_cutout_1793185173936.jpg');
  // First crop the wooden bar at bottom: image is 1024x1024, wooden bar is roughly at y >= 760
  const puppyCropped = path.join(outDir, 'puppy-temp.png');
  await sharp(puppySrc)
    .extract({ left: 100, top: 120, width: 824, height: 640 })
    .toFile(puppyCropped);

  await removeBackgroundFlood({
    input: puppyCropped,
    output: path.join(outDir, 'peeking-puppy.png'),
    tolerance: 30,
    cornerSample: [255, 255, 255]
  });
  fs.unlinkSync(puppyCropped);
  console.log('Saved peeking-puppy.png');

  // 5. Three supplement pouches
  const pouchesSrc = path.join(brainDir, 'three_supplement_pouches_1793185162655.jpg');
  const metadata = await sharp(pouchesSrc).metadata();
  const W = metadata.width;
  const H = metadata.height;

  // Extract Green (left: ~40 to ~340)
  const greenTemp = path.join(outDir, 'green-temp.png');
  await sharp(pouchesSrc)
    .extract({ left: Math.round(W * 0.04), top: Math.round(H * 0.24), width: Math.round(W * 0.31), height: Math.round(H * 0.52) })
    .toFile(greenTemp);
  await removeBackgroundFlood({
    input: greenTemp,
    output: path.join(outDir, 'pouch-green.png'),
    tolerance: 28,
    cornerSample: [255, 255, 255]
  });
  fs.unlinkSync(greenTemp);

  // Extract Orange (middle: ~340 to ~660)
  const orangeTemp = path.join(outDir, 'orange-temp.png');
  await sharp(pouchesSrc)
    .extract({ left: Math.round(W * 0.345), top: Math.round(H * 0.24), width: Math.round(W * 0.31), height: Math.round(H * 0.52) })
    .toFile(orangeTemp);
  await removeBackgroundFlood({
    input: orangeTemp,
    output: path.join(outDir, 'pouch-orange.png'),
    tolerance: 28,
    cornerSample: [255, 255, 255]
  });
  fs.unlinkSync(orangeTemp);

  // Extract Blue (right: ~650 to ~960)
  const blueTemp = path.join(outDir, 'blue-temp.png');
  await sharp(pouchesSrc)
    .extract({ left: Math.round(W * 0.65), top: Math.round(H * 0.24), width: Math.round(W * 0.31), height: Math.round(H * 0.52) })
    .toFile(blueTemp);
  await removeBackgroundFlood({
    input: blueTemp,
    output: path.join(outDir, 'pouch-blue.png'),
    tolerance: 28,
    cornerSample: [255, 255, 255]
  });
  fs.unlinkSync(blueTemp);

  // 6. Cutouts for Pet Collection:
  // Macaw
  await removeBackgroundFlood({
    input: path.join(outDir, 'macaw.jpg'),
    output: path.join(outDir, 'macaw.png'),
    tolerance: 50,
    cornerSample: [249, 115, 22] // orange bg
  });

  // Bulldog
  await removeBackgroundFlood({
    input: path.join(outDir, 'bulldog.jpg'),
    output: path.join(outDir, 'bulldog.png'),
    tolerance: 45,
    cornerSample: [254, 210, 48] // yellow bg
  });

  // Spaniel
  await removeBackgroundFlood({
    input: path.join(outDir, 'spaniel.jpg'),
    output: path.join(outDir, 'spaniel.png'),
    tolerance: 45,
    cornerSample: [56, 189, 248] // sky blue bg
  });

  console.log('All image processing complete!');
}

main().catch(console.error);
