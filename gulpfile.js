var gulp = require("gulp");
var eslint = require("gulp-eslint");
var gutil = require("gulp-util");
var order = require('gulp-order');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var browserify = require("browserify");
var reactify = require("reactify");
var uglify = require("gulp-uglify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('lint-node', function () {
    return gulp.src([
      'config/*.js',
      'routes/*.js',
      'models/*.js',
      'spec/*.js',
      'app.js'
      ])
      .pipe(eslint({
        envs: ['node']
      }))
      .pipe(eslint.format())
      .pipe(eslint.failOnError());
});

gulp.task('lint-react', function () {
    return gulp.src([
      'app/**/*.jsx'
    ])
    .pipe(eslint({
      envs: ['browser', 'node']
    }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});


gulp.task('sass', function() {
  gulp.src('./app/css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(order([
      'normalize.css',
      'main.css'
    ]))
    .pipe(concat("main.css"))
    .pipe(gulp.dest('./assets/'))
});

gulp.task('lint', ['lint-node', 'lint-react']);

gulp.task('browserify', function() {
  var b = browserify({
    entries: './app/index.jsx',
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: [reactify]
  });

  return b.bundle()
    .pipe(source('bundle.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['lint', 'browserify', 'sass']);
