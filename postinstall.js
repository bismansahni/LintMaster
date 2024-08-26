import fs from 'fs/promises';
import path from 'path';

const configFileName = '.eslintrc.json';
const configFilePath = path.join(new URL(import.meta.url).pathname, 'config', configFileName);
const destinationPath = path.resolve(process.cwd(), configFileName);

async function copyConfigFile() {
  try {
    await fs.copyFile(configFilePath, destinationPath);
    console.log('ESLint configuration file has been copied to the root of the project.');
  } catch (err) {
    console.error('Error copying ESLint configuration:', err);
  }
}

copyConfigFile();
