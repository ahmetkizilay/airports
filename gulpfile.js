var gulp = require("gulp");
var eslint = require("gulp-eslint");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

gulp.task("webpack", function(callback) {

    webpack(webpackConfig, function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
      gutil.log("[webpack]", stats.toString({
        colors: true
      }));

      callback();
    });
});

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

gulp.task('copy', function (callback) {
  var srcDestMap = [
    { src: 'node_modules/react/dist/react-with-addons.js', dest: 'assets/'}
  ];

  srcDestMap.forEach(function (pair) {
      gulp.src(pair.src).pipe(gulp.dest(pair.dest));
  });

  callback();
})

gulp.task('lint', ['lint-node', 'lint-react']);


gulp.task('default', ['lint', 'copy', 'webpack']);
