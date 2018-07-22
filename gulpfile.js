const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const del = require('del');
const plumber = require("gulp-plumber");
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const image = require('gulp-image');
const webpack = require('webpack-stream');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    })
})

gulp.task('js', () =>
    gulp.src('./src/js/main.js')
        .pipe(plumber())
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
);

gulp.task("sass", () =>
  gulp
    .src("./src/sass/base.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      autoprefixer({
        browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"]
      })
    )
    .pipe(
      sass({
        outputStyle: "compressed",
        css_imports: true
      }).on("error", sass.logError)
    )
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/css"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    )
);

gulp.task("views", () =>
  gulp
    .src("./src/views/index.pug")
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest("./dist"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    )
);

gulp.task("images", () =>
  gulp
    .src("./src/images/**/*.{png,jpg,svg,jpeg,gif}")
    .pipe(plumber())
    .pipe(image())
    .pipe(gulp.dest("./dist/images/"))
);

gulp.task('watch', () => {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./src/views/**/*.pug', ['views']);
    gulp.watch('./src/images/**/*', ['images']);
})

gulp.task('clean', () => {
    del.sync('dist')
})

gulp.task('default', () => {
    runSequence('clean', ['js', 'sass', 'views', 'images'], 'browserSync', 'watch');
})