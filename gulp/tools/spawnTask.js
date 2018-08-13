const gulp = require('gulp');

function spawnTask(task) {
  gulp.start(task);
  // can't separate "legal" error from gulp watch faulty behavior this way
  // const spawned = spawn('node', [`./node_modules/gulp/bin/gulp.js`, task], { stdio: 'inherit' });
  // spawned.setMaxListeners(0);
  // spawned.on('close', function (code) {    
  //   console.log('Process closed, restarting, exitCode '+ code);    
  //   spawnTask(task);
  // });    
}
module.exports = spawnTask;