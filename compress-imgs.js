import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Import our products.js directly by compiling it or just parse the JS.
// Since it's ES module, we can import it dynamically.
const compressImages = async () => {
  const dir = 'public/catalogue';
  const files = fs.readdirSync(dir).filter(file => file.endsWith('.jpg'));
  
  // Hardcoded list from our previous check
  const usedImages = new Set([
    'New Catalogue SK 2025 print_Page_09.jpg',
    'New Catalogue SK 2025 print_Page_10.jpg',
    'New Catalogue SK 2025 print_Page_11.jpg',
    'New Catalogue SK 2025 print_Page_12.jpg',
    'New Catalogue SK 2025 print_Page_13.jpg',
    'New Catalogue SK 2025 print_Page_15.jpg',
    'New Catalogue SK 2025 print_Page_16.jpg',
    'New Catalogue SK 2025 print_Page_35.jpg',
    'New Catalogue SK 2025 print_Page_36.jpg',
    'New Catalogue SK 2025 print_Page_37.jpg',
    'New Catalogue SK 2025 print_Page_40.jpg',
    'New Catalogue SK 2025 print_Page_41.jpg',
    'New Catalogue SK 2025 print_Page_25.jpg',
    'New Catalogue SK 2025 print_Page_26.jpg',
    'New Catalogue SK 2025 print_Page_18.jpg',
    'New Catalogue SK 2025 print_Page_19.jpg',
    'New Catalogue SK 2025 print_Page_28.jpg',
    'New Catalogue SK 2025 print_Page_29.jpg'
  ]);

  console.log(`Found ${files.length} images. Starting compression...`);

  for (const file of files) {
    if (usedImages.has(file)) {
      console.log(`Skipping product image: ${file}`);
      continue;
    }

    const filePath = path.join(dir, file);
    const tempPath = path.join(dir, 'temp_' + file);
    
    try {
      await sharp(filePath)
        .jpeg({ quality: 50, progressive: true })
        .resize({ width: 1920, withoutEnlargement: true }) // Also resize down if they are massive
        .toFile(tempPath);
        
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      console.log(`Compressed: ${file}`);
    } catch (e) {
      console.error(`Failed to compress ${file}:`, e);
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }
  }
  
  console.log('Compression complete!');
};

compressImages();
