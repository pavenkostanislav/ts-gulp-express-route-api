const gulp = require("gulp");
const fs = require("fs");
const settings = require("../settings");

gulp.task("copy-web-config", done => {
  const src = `./Web.config`;
  const dest = settings.srcBuildPath + '/Web.config';
  fs.copyFile(src, dest, done);
});
