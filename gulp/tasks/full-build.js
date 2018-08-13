const gulp = require("gulp");
const sequence = require("run-sequence");
const settings = require("../settings");

gulp.task("full-build", function (done) {
    settings.env = settings.env || 'dev';
    return sequence("build", "ng-build", "copy-fe", "copy-web-config", done);
});
