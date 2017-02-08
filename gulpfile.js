var gulp = require('gulp');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

gulp.task('minify', ['minify-index', 'minify-projects']);

gulp.task('minify-index', function () {
    return gulp.src('index_source.html')
        .pipe(rename('index.html'))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('minify-projects', function () {
    return gulp.src('projects/index_source.html')
        .pipe(rename('index.html'))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./projects'));
});

gulp.task('minify-images', function () {
    var pics = ['img/wacky-bicycles-02.png', 'img/avatar.jpg', 'img/hero-bg.jpg'];
    for (var i = 0; i < pics.length; i++) {
        gulp.src(pics[i])
            .pipe(imagemin())
            .pipe(gulp.dest('img'))
    }
});