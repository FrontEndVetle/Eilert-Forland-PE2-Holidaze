const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

exports.default = () =>
    gulp
    .src('./images/*')
    .pipe(imagemin())
    .pipe(
        imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 5, progressive: true }),
            imagemin.optipng({ optimizationLevel: 3 }),
            imagemin.svgo({
                plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
            }),
        ])
    )
    .pipe(gulp.dest('dist/images'));