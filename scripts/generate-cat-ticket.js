// Function to generate a postage stamp SVG with scalloped edges
function generateStampSvg(w = 176, h = 118, pitch = 10, radius = 2.5) {
  // Let's create an SVG path for the postage stamp
  // Background: #54CDFA
  let path = `M ${radius} 0 `;
  
  // Top edge (left to right)
  const numTop = Math.floor((w - 2 * radius) / pitch);
  const topPad = (w - numTop * pitch) / 2;
  path += `L ${topPad} 0 `;
  for (let i = 0; i < numTop; i++) {
    const x = topPad + i * pitch;
    path += `A ${radius} ${radius} 0 0 1 ${x + pitch} 0 `;
  }
  path += `L ${w} 0 `;
  
  // Right edge (top to bottom)
  const numRight = Math.floor((h - 2 * radius) / pitch);
  const rightPad = (h - numRight * pitch) / 2;
  path += `L ${w} ${rightPad} `;
  for (let i = 0; i < numRight; i++) {
    const y = rightPad + i * pitch;
    path += `A ${radius} ${radius} 0 0 1 ${w} ${y + pitch} `;
  }
  path += `L ${w} ${h} `;

  // Bottom edge (right to left)
  path += `L ${w - topPad} ${h} `;
  for (let i = 0; i < numTop; i++) {
    const x = w - topPad - i * pitch;
    path += `A ${radius} ${radius} 0 0 1 ${x - pitch} ${h} `;
  }
  path += `L 0 ${h} `;

  // Left edge (bottom to top)
  path += `L 0 ${h - rightPad} `;
  for (let i = 0; i < numRight; i++) {
    const y = h - rightPad - i * pitch;
    path += `A ${radius} ${radius} 0 0 1 0 ${y - pitch} `;
  }
  path += `Z`;

  return `
<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="${path}" fill="#4FD0FD" />
  
  <!-- Inner Border Box -->
  <rect x="13" y="12" width="${w - 26}" height="${h - 24}" rx="2" stroke="#111827" stroke-width="1.6" fill="none" />
  
  <!-- Divider Line -->
  <line x1="13" y1="48" x2="${w - 13}" y2="48" stroke="#111827" stroke-width="1.6" />
  
  <!-- Headline "CAT" -->
  <text x="21" y="38" font-family="'Lilita One', sans-serif" font-weight="900" font-size="25" fill="#111827" letter-spacing="0.5">CAT</text>
  
  <!-- Subtitle Text -->
  <text x="21" y="70" font-family="'DM Sans', sans-serif" font-weight="600" font-size="11.5" fill="#111827">Your furry friend is</text>
  <text x="21" y="86" font-family="'DM Sans', sans-serif" font-weight="600" font-size="11.5" fill="#111827">waiting for you.</text>
</svg>
`;
}

const fs = require('fs');
fs.writeFileSync('public/images/serve/cat_ticket.svg', generateStampSvg(180, 116, 9.5, 2.2).trim());
console.log('Generated cat_ticket.svg');
