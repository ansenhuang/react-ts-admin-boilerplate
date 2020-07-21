'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');


const path = require('path');
const paths = require('../config/paths');
const execSync = require('child_process').execSync;
const argv = process.argv.slice(2);

const getClient = name => path.join(__dirname, '../node_modules/.bin', name);
const statsPath = path.join(__dirname, '../stats.json');

if (!argv.includes('--ignore-build')) {
  execSync('yarn build', { stdio: 'inherit' });
}
execSync(`${getClient('webpack-bundle-analyzer')} ${statsPath} ${paths.appBuild}`, { stdio: 'inherit' });
