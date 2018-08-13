const gulp = require("gulp");
const sequence = require("run-sequence");
const settings = require("../settings");

gulp.task("start", function (done) {
    settings.env = settings.env || 'local';
    return sequence("build", "start-build", done);
})