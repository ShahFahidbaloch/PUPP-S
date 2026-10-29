const sharp = require('sharp');
const path = require('path');

async function extractCircles() {
  const src = 'C:/Users/LAPTOP GODAM/.gemini/antigravity-ide/brain/401bdca5-3245-4dfd-ac29-1b6afa02b258/.user_uploaded/media_1793189088674.png';
  
  // Bird circle: centered around (795, 96), diameter 116
  const birdSvgMask = Buffer.from('<svg width="116" height="116"><circle cx="58" cy="58" r="57.5" fill="white" /></svg>');
  
  await sharp(src)
    .extract({ left: 737, top: 38, width: 116, height: 116 })
    .composite([{ input: birdSvgMask, blend: 'dest-in' }])
    .resize(232, 232, { kernel: 'lanczos3' })
    .png()
    .toFile('public/images/serve/bird_circle_clean.png');

  // Kitten circle: centered around (672, 218), diameter 116
  const catSvgMask = Buffer.from('<svg width="116" height="116"><circle cx="58" cy="58" r="57.5" fill="white" /></svg>');
  
  await sharp(src)
    .extract({ left: 614, top: 160, width: 116, height: 116 })
    .composite([{ input: catSvgMask, blend: 'dest-in' }])
    .resize(232, 232, { kernel: 'lanczos3' })
    .png()
    .toFile('public/images/serve/cat_circle_clean.png');

  // Dog circle: centered around (795, 342), diameter 116
  const dogSvgMask = Buffer.from('<svg width="116" height="116"><circle cx="58" cy="58" r="57.5" fill="white" /></svg>');
  
  await sharp(src)
    .extract({ left: 737, top: 284, width: 116, height: 116 })
    .composite([{ input: dogSvgMask, blend: 'dest-in' }])
    .resize(232, 232, { kernel: 'lanczos3' })
    .png()
    .toFile('public/images/serve/dog_circle_clean.png');

  // Also 2x man_puppy_clean
  await sharp('public/images/serve/man_puppy_clean.png')
    .resize(400, 330, { kernel: 'lanczos3' })
    .png()
    .toFile('public/images/serve/man_puppy_2x.png');

  console.log('Successfully generated clean 2x circular assets and man_puppy_2x.png');
}

extractCircles().catch(console.error);
