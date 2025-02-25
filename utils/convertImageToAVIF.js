const { execSync } = require('child_process');
const fs = require('fs');

fs.readdir('./', (err, files) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }

  const filteredFiles = files.filter(
    (file) => file !== 'convertImageToAVIF.js' && !file.endsWith('.avif')
  );
  const length = filteredFiles.length;

  filteredFiles.forEach((file, index) => {
    console.log(
      `(${index + 1}/${length}) Converting ${file} to ${
        file.split('.')[0]
      }.avif...`
    );
    execSync(`ffmpeg -i ${file} ${file.split('.')[0]}.avif -hide_banner`);
    console.log('Conversion complete!\n');
  });

  filteredFiles.forEach((file) => {
    fs.rmSync(file);
  });
});
