/* eslint-disable */
// One-off script to compress images in public/assets in place.
// Photos > 1600px wide are downscaled. JPEG re-encoded at quality 80.
// PNGs are compressed via sharp's adaptive PNG encoder.
// Skips SVGs entirely and skips already-small images (< 300KB AND < 1600px wide).

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..', 'public', 'assets');
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 80;
const SKIP_IF_BYTES_BELOW = 300 * 1024; // 300 KB

const exts = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, files);
    else files.push(p);
  }
  return files;
}

(async () => {
  const all = walk(ROOT).filter((f) => exts.has(path.extname(f).toLowerCase()));
  console.log(`Found ${all.length} images to consider`);

  let totalBefore = 0;
  let totalAfter = 0;
  let processed = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of all) {
    const ext = path.extname(file).toLowerCase();
    const before = fs.statSync(file).size;
    totalBefore += before;

    try {
      // Read file into buffer first — sharp's path-based opener fails on
      // some Windows/OneDrive paths even when fs can read them.
      const buffer = fs.readFileSync(file);
      const metadata = await sharp(buffer).metadata();
      const needsResize = (metadata.width || 0) > MAX_WIDTH;
      if (!needsResize && before < SKIP_IF_BYTES_BELOW) {
        totalAfter += before;
        skipped++;
        continue;
      }

      let pipeline = sharp(buffer, { failOn: 'none' });
      if (needsResize) pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });

      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
      } else if (ext === '.png') {
        pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true });
      } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: WEBP_QUALITY });
      }

      const buf = await pipeline.toBuffer();
      // Only write back if smaller
      if (buf.length < before) {
        fs.writeFileSync(file, buf);
        totalAfter += buf.length;
        processed++;
        const beforeMB = (before / 1024 / 1024).toFixed(2);
        const afterMB = (buf.length / 1024 / 1024).toFixed(2);
        const saved = (((before - buf.length) / before) * 100).toFixed(0);
        console.log(`  ${path.relative(ROOT, file).padEnd(40)} ${beforeMB} MB -> ${afterMB} MB (-${saved}%)`);
      } else {
        totalAfter += before;
        skipped++;
      }
    } catch (e) {
      console.error(`ERROR on ${file}:`, e.message);
      totalAfter += before;
      errors++;
    }
  }

  const beforeMB = (totalBefore / 1024 / 1024).toFixed(2);
  const afterMB = (totalAfter / 1024 / 1024).toFixed(2);
  const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(2);
  const savedPct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
  console.log('');
  console.log(`Done. Processed: ${processed}  Skipped: ${skipped}  Errors: ${errors}`);
  console.log(`Total: ${beforeMB} MB -> ${afterMB} MB  (saved ${savedMB} MB, -${savedPct}%)`);
})();
