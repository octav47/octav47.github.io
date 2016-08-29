var gulp = require('gulp');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', ['minify-index', 'minify-projects']);

gulp.task('minify-index', function() {
    return gulp.src('index_source.html')
        .pipe(rename('index.html'))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('minify-projects', function() {
    return gulp.src('projects_source.html')
        .pipe(rename('projects.html'))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./'));
});