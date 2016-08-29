var gulp = require('gulp');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
    return gulp.src('index_source.html')
        .pipe(rename('index.html'))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./'));
});