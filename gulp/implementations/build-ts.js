const gulp = require("gulp");
const spawn = require("../tools/spawn");
// const path = require("path");

gulp.task("build-ts", function (done) {
  spawn("tsc", [], { stdio: "inherit" }, done, "compilation");
});
