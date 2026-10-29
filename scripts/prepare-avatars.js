const sharp = require('sharp');
const path = require('path');

const imgDir = path.resolve(__dirname, '../public/images');

async function makeAvatars() {
  console.log('Generating avatar crops...');

  // 1. Bird circular avatar from macaw-card.jpg (centered on head)
  await sharp(path.join(imgDir, 'macaw-card.jpg'))
    .extract({ left: 300, top: 50, width: 500, height: 500 })
    .resize(240, 240)
    .toFile(path.join(imgDir, 'avatar-bird.jpg'));

  // 2. Dog circular avatar from hero-puppy.jpg
  await sharp(path.join(imgDir, 'hero-puppy.jpg'))
    .extract({ left: 320, top: 220, width: 440, height: 440 })
    .resize(240, 240)
    .toFile(path.join(imgDir, 'avatar-dog.jpg'));

  // 3. Frenchie avatar for testimonial card (green background)
  // Take bulldog-card.jpg head
  await sharp(path.join(imgDir, 'bulldog-card.jpg'))
    .extract({ left: 240, top: 160, width: 540, height: 540 })
    .resize(280, 280)
    .toFile(path.join(imgDir, 'avatar-frenchie.jpg'));

  // 4. Pet parent holding pup card:
  // Crop girl-frenchie.jpg to focus on the hug & smile
  await sharp(path.join(imgDir, 'girl-frenchie.jpg'))
    .extract({ left: 160, top: 140, width: 680, height: 580 })
    .resize(400, 340)
    .toFile(path.join(imgDir, 'pet-parent.jpg'));

  console.log('Avatars generated successfully!');
}

makeAvatars().catch(console.error);
