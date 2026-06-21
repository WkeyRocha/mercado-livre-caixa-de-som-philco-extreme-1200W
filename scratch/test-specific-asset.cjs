const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../src/assets');
const files = fs.readdirSync(assetsDir);

async function check() {
  for (const file of files) {
    if (file.endsWith('.asset.json')) {
      const filePath = path.join(assetsDir, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const url = data.url;
      try {
        const res = await fetch(url, { method: 'HEAD' });
        console.log(`${file}: ${url} -> ${res.status}`);
      } catch (err) {
        console.log(`${file}: ${url} -> Error: ${err.message}`);
      }
    }
  }
}

check();
