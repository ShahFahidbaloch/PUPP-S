function getStampPath(w = 180, h = 118, pitch = 10, r = 2.2) {
  let p = `M 0 0 `;
  const numW = Math.floor((w - 2 * r) / pitch);
  const padW = (w - numW * pitch) / 2;
  p += `L ${padW} 0 `;
  for (let i = 0; i < numW; i++) {
    const xMid = padW + i * pitch + pitch / 2;
    const xEnd = padW + (i + 1) * pitch;
    p += `A ${r} ${r} 0 0 0 ${xEnd} 0 `;
  }
  p += `L ${w} 0 `;
  
  const numH = Math.floor((h - 2 * r) / pitch);
  const padH = (h - numH * pitch) / 2;
  p += `L ${w} ${padH} `;
  for (let i = 0; i < numH; i++) {
    const yEnd = padH + (i + 1) * pitch;
    p += `A ${r} ${r} 0 0 0 ${w} ${yEnd} `;
  }
  p += `L ${w} ${h} `;

  p += `L ${w - padW} ${h} `;
  for (let i = 0; i < numW; i++) {
    const xEnd = w - padW - (i + 1) * pitch;
    p += `A ${r} ${r} 0 0 0 ${xEnd} ${h} `;
  }
  p += `L 0 ${h} `;

  p += `L 0 ${h - padH} `;
  for (let i = 0; i < numH; i++) {
    const yEnd = h - padH - (i + 1) * pitch;
    p += `A ${r} ${r} 0 0 0 0 ${yEnd} `;
  }
  p += `Z`;
  return p;
}

const fs = require('fs');
fs.writeFileSync('scripts/stamp-path.txt', getStampPath());
console.log('Saved stamp path to scripts/stamp-path.txt');
