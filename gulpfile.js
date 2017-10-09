var gulp = require('gulp'),
    inject = require('gulp-inject'),
    connect = require('gulp-connect'),
    angularFilesort = require('gulp-angular-filesort'),
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
  return gulp.src('index.html', {cwd: './src'})
    .pipe(inject(
      gulp.src(['./src/js/controllers/*.js', './src/js/services/**/*.js']).pipe(angularFilesort()), {
      ignorePath: '/src'
    }))
    .pipe(inject(
      gulp.src(['./src/css/**/*.css']), {
        ignorePath: '/src'
      }
    ))
    .pipe(gulp.dest('./src'));
});

gulp.task('html', function () {
  gulp.src(['./src/*.html', './src/js/*.js', './src/css/*.css'])
    .pipe(connect.reload());
});

gulp.task('wiredep', function () {
  gulp.src('./src/index.html')
  .pipe(wiredep({
    directory: './src/lib'
  }))
  .pipe(gulp.dest('./src'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.html'], ['html']);
  //gulp.watch(['./src/css/**/*.css'], ['css', 'index']);
  gulp.watch(['./src/js/**/*.js', './Gulpfile.js'], ['index']);
  gulp.watch(['./bower.json'], ['wiredep']);
});

gulp.task('default', ['connect', 'index', 'wiredep', 'watch']);
