const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function removeBackgroundFlood({ input, output, tolerance = 35, cornerSample = null, cropBottom = 0, feather = 2 }) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Find sample background color from top-left corner if not given
  let bgR = cornerSample ? cornerSample[0] : data[0];
  let bgG = cornerSample ? cornerSample[1] : data[1];
  let bgB = cornerSample ? cornerSample[2] : data[2];

  const visited = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;

  function isBg(r, g, b) {
    const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);
    return dist < tolerance;
  }

  // Seed borders
  for (let x = 0; x < width; x++) {
    // top
    const idxTop = x;
    const pTop = idxTop * 4;
    if (isBg(data[pTop], data[pTop+1], data[pTop+2])) {
      visited[idxTop] = 1;
      queue[tail++] = idxTop;
    }
    // bottom (if not cropping)
    const idxBot = (height - 1) * width + x;
    const pBot = idxBot * 4;
    if (isBg(data[pBot], data[pBot+1], data[pBot+2])) {
      visited[idxBot] = 1;
      queue[tail++] = idxBot;
    }
  }

  for (let y = 0; y < height; y++) {
    // left
    const idxLeft = y * width;
    const pLeft = idxLeft * 4;
    if (!visited[idxLeft] && isBg(data[pLeft], data[pLeft+1], data[pLeft+2])) {
      visited[idxLeft] = 1;
      queue[tail++] = idxLeft;
    }
    // right
    const idxRight = y * width + (width - 1);
    const pRight = idxRight * 4;
    if (!visited[idxRight] && isBg(data[pRight], data[pRight+1], data[pRight+2])) {
      visited[idxRight] = 1;
      queue[tail++] = idxRight;
    }
  }

  // BFS
  while (head < tail) {
    const idx = queue[head++];
    const x = idx % width;
    const y = Math.floor(idx / width);

    // Neighbors
    const neighbors = [
      x > 0 ? idx - 1 : -1,
      x < width - 1 ? idx + 1 : -1,
      y > 0 ? idx - width : -1,
      y < height - 1 ? idx + width : -1,
    ];

    for (const n of neighbors) {
      if (n !== -1 && !visited[n]) {
        const pn = n * 4;
        if (isBg(data[pn], data[pn+1], data[pn+2])) {
          visited[n] = 1;
          queue[tail++] = n;
        }
      }
    }
  }

  // Apply transparency to visited pixels
  for (let idx = 0; idx < width * height; idx++) {
    if (visited[idx]) {
      data[idx * 4 + 3] = 0;
    } else {
      // Optional crop bottom
      const y = Math.floor(idx / width);
      if (cropBottom > 0 && y >= height - cropBottom) {
        data[idx * 4 + 3] = 0;
      }
    }
  }

  // Save as PNG
  await sharp(data, { raw: info }).png({ quality: 95 }).toFile(output);
  console.log('Finished processing:', output);
}

module.exports = { removeBackgroundFlood };
