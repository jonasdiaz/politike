var gulp = require('gulp'),
    inject = require('gulp-inject'),
    connect = require('gulp-connect');
    wiredep = require('wiredep').stream;

var sources = {
  css: './src/css',
  js: './src/js'
};

gulp.task('connect', function() {
  connect.server({
    name: 'Dev App',
    root: 'src',
    port: 3000,
    livereload: true
  });
});

gulp.task('saludar', function(){
  console.log('Hola');
});

gulp.task('index', function(){
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./src'));
});

gulp.task('html', function () {
  gulp.src(['./src/*.html', './src/**/*.js', './src/**/*.css'])
    .pipe(connect.reload());
});

gulp.task('bower', function () {
  /*gulp.src('./src/footer.html')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./src'));*/
    gulp.src('src/index.html')
    .pipe(wiredep({
      directory: 'bower_components',
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('src'));
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['html', 'index', 'bower']);
});

gulp.task('default', ['index', 'bower', 'connect', 'watch']);
