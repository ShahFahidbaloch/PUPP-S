const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const src = 'C:/Users/LAPTOP GODAM/.gemini/antigravity-ide/brain/401bdca5-3245-4dfd-ac29-1b6afa02b258/.user_uploaded/media_1793189088674.png';
const outDir = path.resolve(__dirname, '../public/images/serve');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function extractElements() {
  console.log('Extracting exact crops from user reference image...');

  // 1. Man holding puppy card (with stack effect and heart badge)
  // Let's crop around x: 280, y: 240, w: 200, h: 170
  await sharp(src)
    .extract({ left: 285, top: 245, width: 200, height: 165 })
    .toFile(path.join(outDir, 'man-puppy.png'));

  // 2. Bird circular avatar (Scarlet Macaw)
  // x: 720 to 835 (w: 115), y: 35 to 155 (h: 120)
  await sharp(src)
    .extract({ left: 722, top: 35, width: 114, height: 120 })
    .toFile(path.join(outDir, 'bird-circle.png'));

  // 3. Cat circular avatar (Ginger kitten)
  // x: 595 to 715 (w: 120), y: 155 to 275 (h: 120)
  await sharp(src)
    .extract({ left: 597, top: 155, width: 116, height: 120 })
    .toFile(path.join(outDir, 'cat-circle.png'));

  // 4. Cat ticket (Blue serrated postage stamp)
  // x: 735 to 885 (w: 150), y: 160 to 270 (h: 110)
  await sharp(src)
    .extract({ left: 735, top: 160, width: 152, height: 110 })
    .toFile(path.join(outDir, 'cat-ticket.png'));

  // 5. Dog circular avatar (Brown dog)
  // x: 722 to 836 (w: 114), y: 280 to 400 (h: 120)
  await sharp(src)
    .extract({ left: 722, top: 280, width: 114, height: 120 })
    .toFile(path.join(outDir, 'dog-circle.png'));

  console.log('Finished element extraction!');
}

extractElements().catch(console.error);
