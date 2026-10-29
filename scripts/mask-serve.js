const sharp = require('sharp');
const path = require('path');
const src = 'C:/Users/LAPTOP GODAM/.gemini/antigravity-ide/brain/401bdca5-3245-4dfd-ac29-1b6afa02b258/.user_uploaded/media_1793189088674.png';
const outDir = path.resolve(__dirname, '../public/images/serve');

function makeCircleMask(size) {
  return Buffer.from(`<svg width="${size}" height="${size}"><circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="#fff"/></svg>`);
}

async function maskCircle(input, size, output) {
  const mask = makeCircleMask(size);
  await sharp(input)
    .resize(size, size)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile(output);
}

async function processAll() {
  console.log('Processing circular avatars and cards...');

  // 1. Man puppy card (already great, let's make sure it has clean corners)
  await sharp(src)
    .extract({ left: 288, top: 245, width: 196, height: 165 })
    .toFile(path.join(outDir, 'man-puppy.png'));

  // 2. Bird circle (cx: 778, cy: 94, r: 56)
  const birdTemp = path.join(outDir, 'bird-temp.png');
  await sharp(src)
    .extract({ left: 722, top: 38, width: 114, height: 114 })
    .toFile(birdTemp);
  await maskCircle(birdTemp, 114, path.join(outDir, 'bird-circle.png'));

  // 3. Cat circle (cx: 656, cy: 213, r: 58)
  const catTemp = path.join(outDir, 'cat-temp.png');
  await sharp(src)
    .extract({ left: 597, top: 154, width: 118, height: 118 })
    .toFile(catTemp);
  await maskCircle(catTemp, 118, path.join(outDir, 'cat-circle.png'));

  // 4. Cat ticket (left: 735, top: 158, width: 172, height: 114)
  await sharp(src)
    .extract({ left: 735, top: 158, width: 172, height: 114 })
    .toFile(path.join(outDir, 'cat-ticket.png'));

  // 5. Dog circle (cx: 780, cy: 340, r: 58)
  const dogTemp = path.join(outDir, 'dog-temp.png');
  await sharp(src)
    .extract({ left: 721, top: 281, width: 118, height: 118 })
    .toFile(dogTemp);
  await maskCircle(dogTemp, 118, path.join(outDir, 'dog-circle.png'));

  console.log('Finished masking all avatars!');
}

processAll().catch(console.error);
