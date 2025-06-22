const fs = require("fs");
const path = require("path");

// Source and destination paths
const sourceDir = path.join(__dirname, "../jewellery-without-auth/public/images");
const destDir = path.join(__dirname, "public/asseets/images");

// Function to copy files
function copyImages() {
  // Create destination folder if it doesn't exist
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log("Destination folder created:", destDir);
  }

  // Read all files from source
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error("Error reading source directory:", err);
      return;
    }

    files.forEach((file) => {
      const sourceFile = path.join(sourceDir, file);
      const destFile = path.join(destDir, file);

      fs.copyFile(sourceFile, destFile, (err) => {
        if (err) {
          console.error(`❌ Failed to copy ${file}:`, err);
        } else {
          console.log(`✅ Copied: ${file}`);
        }
      });
    });
  });
}

copyImages();
