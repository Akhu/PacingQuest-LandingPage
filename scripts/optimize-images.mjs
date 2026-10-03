// Generates the web-sized images used by the landing page from the source assets.
// Run once after changing a source image: `node scripts/optimize-images.mjs`
// (sharp ships with Astro, no extra dependency needed).
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const SRC = 'public/images/pacingquest';
const OUT = `${SRC}/optimized`;
const LOGO = 'public/assets/PemFlow_logo.png';
const CREAM = '#fdf8f2';

await mkdir(OUT, { recursive: true });

const webp = (input, output, width, quality = 80) =>
  sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality, effort: 6 }).toFile(output);

// Hero mockup (displayed up to ~448 CSS px wide)
for (const width of [480, 600, 720, 960]) {
  await webp(`${SRC}/Hero.png`, `${OUT}/hero-${width}.webp`, width);
}

// App screenshots (displayed ~256 CSS px wide)
for (const name of ['Trends', 'Charts']) {
  await webp(`${SRC}/${name}.png`, `${OUT}/${name.toLowerCase()}-512.webp`, 512);
}

// 3D icons (displayed at 40–56 CSS px)
const icons = [
  'balance_scale_3d', 'card_file_box_3d', 'clipboard_3d', 'floppy_disk_3d',
  'identification_card_3d', 'kite_3d', 'person_climbing_3d_default',
  'person_in_bed_3d_default', 'sparkles_3d', 'woman_in_lotus_position_3d_default',
];
for (const name of icons) {
  await webp(`${SRC}/${name}.png`, `${OUT}/${name}-128.webp`, 128, 85);
}

// Logo: the source has a wide transparent/blurred margin, trim it first
const trimmedLogo = await sharp(LOGO).trim({ threshold: 10 }).toBuffer();
const square = (size, background = { r: 0, g: 0, b: 0, alpha: 0 }, padding = 0) =>
  sharp(trimmedLogo)
    .resize(size - padding * 2, size - padding * 2, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: padding, bottom: padding, left: padding, right: padding, background });

await square(128).webp({ quality: 85 }).toFile(`${OUT}/logo-128.webp`);
await square(512).png({ palette: true, quality: 90 }).toFile(`${OUT}/logo-512.png`);

// Favicons & touch icons (Pacing Quest logo instead of the former portfolio icon)
await square(16).png().toFile('public/favicon-16x16.png');
await square(32).png().toFile('public/favicon-32x32.png');
await square(192).png({ palette: true, quality: 90 }).toFile('public/android-chrome-192x192.png');
await square(512).png({ palette: true, quality: 90 }).toFile('public/android-chrome-512x512.png');
await square(150, CREAM, 20).flatten({ background: CREAM }).png().toFile('public/mstile-150x150.png');
// iOS fills transparency with black: give the touch icon an opaque cream background
await square(180, CREAM, 18).flatten({ background: CREAM }).png().toFile('public/apple-touch-icon.png');

// .ico container holding PNG entries (supported by every current browser)
const icoSizes = [16, 32, 48];
const pngs = await Promise.all(icoSizes.map((size) => square(size).png().toBuffer()));
const header = Buffer.alloc(6 + icoSizes.length * 16);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(icoSizes.length, 4);
let offset = header.length;
icoSizes.forEach((size, i) => {
  const entry = 6 + i * 16;
  header.writeUInt8(size, entry);
  header.writeUInt8(size, entry + 1);
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(pngs[i].length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += pngs[i].length;
});
await writeFile('public/favicon.ico', Buffer.concat([header, ...pngs]));

console.log('Images generated in', OUT);
