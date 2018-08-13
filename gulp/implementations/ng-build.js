const gulp = require("gulp");
const spawn = require("../tools/spawn");
const settings = require("../settings");

gulp.task("ng-build", function (done) {  
  spawn("gulp", ['build'], { cwd: settings.fePath, stdio: "inherit" }, done, "angular compilation");
});
