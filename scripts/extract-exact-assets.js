const sharp = require('sharp');

async function extractPerfectCircles() {
  const d = 132;
  const r = 65.5;
  const mask = Buffer.from(`<svg width="${d}" height="${d}"><circle cx="${d/2}" cy="${d/2}" r="${r}" fill="white" /></svg>`);

  // Bird: cx: 250, cy: 100
  await sharp('public/right_zoom.png')
    .extract({ left: 184, top: 34, width: d, height: d })
    .composite([{ input: mask, blend: 'dest-in' }])
    .resize(d * 2, d * 2, { kernel: 'lanczos3' })
    .toFile('public/images/serve/bird_circle_perfect.png');

  // Cat: cx: 124, cy: 224
  await sharp('public/right_zoom.png')
    .extract({ left: 58, top: 158, width: d, height: d })
    .composite([{ input: mask, blend: 'dest-in' }])
    .resize(d * 2, d * 2, { kernel: 'lanczos3' })
    .toFile('public/images/serve/cat_circle_perfect.png');

  // Dog: cx: 250, cy: 348
  await sharp('public/right_zoom.png')
    .extract({ left: 184, top: 282, width: d, height: d })
    .composite([{ input: mask, blend: 'dest-in' }])
    .resize(d * 2, d * 2, { kernel: 'lanczos3' })
    .toFile('public/images/serve/dog_circle_perfect.png');

  console.log('Saved perfect circular assets at 2x resolution (diameter 132)');
}

extractPerfectCircles().catch(console.error);
