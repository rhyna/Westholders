var gulp = require('gulp');
var less = require('gulp-less');
 
 function wrapPipe(taskFn) {
  return function(done) {
    var onSuccess = function() {
      done();
    };
    var onError = function(err) {
      done(err);
    }
    var outStream = taskFn(onSuccess, onError);
    if(outStream && typeof outStream.on === 'function') {
      outStream.on('end', onSuccess);
    }
  }
}
gulp.task('default', function() {  
    gulp.watch('./css/**', ['less'])
})

gulp.task('less', wrapPipe(function(success, error) {
  return gulp.src('./css/*.less')
     .pipe(less().on('error', error))
     .pipe(gulp.dest('./css'));
}));