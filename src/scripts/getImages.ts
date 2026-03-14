import fs from 'fs';
import path from 'path';

const allowedExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

function getImages(folderPath: string): string[] {
  const absolutePath = path.join('public', folderPath);
  return fs
    .readdirSync(absolutePath)
    .filter(file => allowedExtensions.includes(path.extname(file).toLowerCase()))
    .map(file => `${folderPath}/${file}`);
}

const folders = [
  '/iteneraries/highlands-to-hidden-water',
  '/iteneraries/crown-jewel-hike'
];

const manifest: Record<string, string[]> = {};
folders.forEach(folder => {
  manifest[folder] = getImages(folder);
});

fs.mkdirSync('src/generated', { recursive: true });
fs.writeFileSync('src/generated/image-manifest.json', JSON.stringify(manifest, null, 2));
console.log('Image manifest generated:', manifest);