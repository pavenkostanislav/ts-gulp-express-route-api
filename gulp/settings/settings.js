/*jshint esversion: 6 */
var argv = require('yargs').argv;

const src = "src";
const buildPath = "./build";
const testSrc = "testSrc";
const fePath = '../health-ahp-main-fe';
const settings = {
  env: argv.env,
  srcPath: `./${src}`,
  testPath: `./${testSrc}`,
  buildPath,
  fePath,
  srcBuildPath: `${buildPath}/${src}`,
  testBuildPath: `${buildPath}/${testSrc}`,
  commonSrcPath: '../health-ahp-main-common/app',
  modulesCommonPath: './node_modules/ahp-common/app'
};

module.exports = settings;
