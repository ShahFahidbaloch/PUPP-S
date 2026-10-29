const sharp = require('sharp');
const path = require('path');

async function prepareRealAvatars() {
  const dir = 'public/images/serve';

  // 1. Bird: Scarlet Macaw on soft warm peach background (#EFE2D3)
  // Let's take public/images/avatar-bird.jpg and center it
  await sharp('public/images/avatar-bird.jpg')
    .resize(400, 400, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 95 })
    .toFile(path.join(dir, 'real_bird.jpg'));

  // 2. Kitten: Fluffy kitten on bright sunflower yellow background (#FED230)
  await sharp(path.join(dir, 'ginger_kitten_real.jpg'))
    .resize(400, 400, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 95 })
    .toFile(path.join(dir, 'real_cat.jpg'));

  // 3. Dog: Corgi puppy / smiling dog on studio orange background (#F97316)
  await sharp(path.join(dir, 'puppy_hug_real.jpg'))
    .resize(400, 400, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 95 })
    .toFile(path.join(dir, 'real_dog.jpg'));

  // 4. Pet Parent holding puppy:
  await sharp('public/images/pet-parent.jpg')
    .resize(400, 320, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 95 })
    .toFile(path.join(dir, 'real_pet_parent.jpg'));

  console.log('Successfully generated real high-res pet assets');
}

prepareRealAvatars().catch(console.error);
