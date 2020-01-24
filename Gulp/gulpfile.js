const gulp = require('gulp');
const sass = require('gulp-sass');
const browesrSync = require('browser-sync').create();

function style() {
    // where is my scss file
    return gulp.src('./scss/**/*.scss')
        // pass that file thourgh sass compilar
        .pipe(sass())
        //where do i save the complied css
        .pipe(gulp.dest('./css'))
        /// strem changes to all browser
        .pipe(browesrSync.stream());
}

//////////////js



function watch() {
    browesrSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browesrSync.reload);
    // gulp.watch('.js/**/*.js').on('change',browesrSync.reload);
}
exports.style = style;
exports.watch = watch;