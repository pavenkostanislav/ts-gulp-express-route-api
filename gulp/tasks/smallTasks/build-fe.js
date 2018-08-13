const gulp = require("gulp");
const sequence = require("run-sequence");

gulp.task("build-fe", function (done) {
    return sequence("ng-build", "copy-fe", done);
});
