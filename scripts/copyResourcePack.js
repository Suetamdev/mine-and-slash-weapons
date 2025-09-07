const { execSync } = require('child_process');
const { directoryAssets, modName } = require('./env');

const dest = `${directoryAssets}/${modName}`;

// Clean destination if exists
execSync(`npx rimraf "${dest}"`);

// Copy data folder
execSync(`npx copyfiles "assets/**/*" "${dest}"`);

// Copy pack.mcmeta
execSync(`npx copyfiles "pack.mcmeta" "${dest}"`);

console.log(`Copied data and pack.mcmeta to ${dest}`);