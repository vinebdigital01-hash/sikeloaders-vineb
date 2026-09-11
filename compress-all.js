import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const compressImages = async () => {
  const dir = 'public/catalogue';
  const files = fs.readdirSync(dir).filter(file => file.endsWith('.jpg'));
  
  console.log(`Found ${files.length} images. Compressing previously skipped large images...`);

  for (const file of files) {
    const filePath = path.join(dir, file);
    
    // Only compress files that are larger than 1MB (the ones we skipped before)
    const stats = fs.statSync(filePath);
    if (stats.size < 1024 * 1024) {
      continue;
    }

    const tempPath = path.join(dir, 'temp_' + file);
    
    try {
      // Compress the product images. 
      // We use slightly higher quality (70) and width (1920) so they still look good but are MUCH smaller than 5MB
      await sharp(filePath)
        .jpeg({ quality: 70, progressive: true })
        .resize({ width: 1920, withoutEnlargement: true })
        .toFile(tempPath);
        
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      
      const newStats = fs.statSync(filePath);
      console.log(`Compressed: ${file} (${(stats.size/1024/1024).toFixed(2)}MB -> ${(newStats.size/1024/1024).toFixed(2)}MB)`);
    } catch (e) {
      console.error(`Failed to compress ${file}:`, e);
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }
  }
  
  console.log('Compression complete!');
};

compressImages();
