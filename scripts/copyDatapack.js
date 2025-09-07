const { execSync } = require('child_process');
const { directoryDatapack, modName } = require('./env');

const folderName = process.argv[2];
if (!folderName) {
  console.error('Please provide a folder name. Usage: npm run datapack:copy <FolderName>');
  process.exit(1);
}

const dest = `${directoryDatapack}/${folderName}/datapacks/${modName}`;

// Clean destination if exists
execSync(`npx rimraf "${dest}"`);

// Copy data folder
execSync(`npx copyfiles "data/**/*" "${dest}"`);

// Copy pack.mcmeta
execSync(`npx copyfiles "pack.mcmeta" "${dest}"`);

console.log(`Copied data and pack.mcmeta to ${dest}`);