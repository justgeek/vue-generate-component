var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');
const runSequence = require('gulp4-run-sequence');

gulp.task('dev', async function() {
    return gulp.src(['./lib/**/*.js', '!./lib/blueprints/**/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', async function() {
    gulp.src('./lib/blueprints/**/**', {
            base: "./lib"
        })
        .pipe(gulp.dest('./dist'));

    gulp.src('./lib/config/config.json')
        .pipe(gulp.dest('./dist/config'));
});

gulp.task('clean', async function() {
    return del([
        'dist/**'
    ]);
});


gulp.task('build', async function(callback) {
    runSequence('clean',
        'dev',
        'copy',
        callback);
});
