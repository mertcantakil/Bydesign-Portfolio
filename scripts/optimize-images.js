const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'src/pictures';
const outputDir = 'src/pictures/optimized';

// Çıktı klasörünü oluştur
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(1200, null, { // maksimum genişlik 1200px
        withoutEnlargement: true,
        fit: 'inside',
      })
      .jpeg({ quality: 80 }) // JPEG kalitesi
      .toFile(outputPath);
    
    console.log(`Optimized: ${inputPath}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

function processDirectory(dirPath) {
  fs.readdirSync(dirPath).forEach(file => {
    const inputPath = path.join(dirPath, file);
    const stat = fs.statSync(inputPath);

    if (stat.isDirectory()) {
      processDirectory(inputPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const relativePath = path.relative(inputDir, dirPath);
      const outputSubDir = path.join(outputDir, relativePath);
      
      if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true });
      }

      const outputPath = path.join(outputSubDir, file);
      optimizeImage(inputPath, outputPath);
    }
  });
}

processDirectory(inputDir); 