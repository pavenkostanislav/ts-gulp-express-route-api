const gulp = require("gulp");
const settings = require("../settings");
const del = require('del');

gulp.task("clean-output", function(){
    del([settings.buildPath]);
});