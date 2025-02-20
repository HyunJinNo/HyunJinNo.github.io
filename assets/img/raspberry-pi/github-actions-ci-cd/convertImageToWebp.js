const { execSync } = require('child_process');
const fs = require('fs');

fs.readdir('./', (err, files) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }

  const filteredFiles = files.filter(
    (file) => file !== 'convertImageToWebp.js'
  );

  filteredFiles.forEach((file) => {
    execSync(`ffmpeg -i ${file} ${file.split('.')[0]}.webp`);
  });

  filteredFiles.forEach((file) => {
    fs.rmSync(file);
  });
});
