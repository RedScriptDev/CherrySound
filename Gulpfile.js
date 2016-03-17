const gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    hbsfy = require('hbsfy').configure({
        traverse: []
    }),
    babelify = require('babelify').configure({
        presets: "es2015"
    }),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    php = require('gulp-connect-php'),
    browserSync = require('browser-sync').create();

gulp.task('browserify', function() {

    return browserify('./app/js/app.js')
        .transform(hbsfy)
        .transform(babelify)
        .bundle()
        .on('error', function(err) {
            console.log(err)
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('htmlmin', function() {
    return gulp.src('./app/*.html')
        .pipe(htmlmin({
            removeComments: true,
            removeWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
    gulp.src('./app/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('build:sass', function() {
    gulp.src('./app/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('imgmin', function() {
    return gulp.src('./app/imgs/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/imgs'));
});

gulp.task('copyfonts', function() {
    return gulp.src('./app/styles/fonts/*')
        .pipe(gulp.dest('./dist/styles/fonts/'));
});

// gulp.task('php', function() {
//     php.server({ base: './app/server', port: 8010, keepalive: true});
// });

gulp.task('browser-sync', function() {
    browserSync.init({
        injectChanges: true,
        server: {
            baseDir: './dist'
        },
        open: false
    });
});

gulp.task('reload-styles', ['sass'], function() {
    browserSync.reload();
});

gulp.task('reload-scripts', ['browserify'], function() {
    browserSync.reload();
});

gulp.task('watch', function() {
    gulp.watch(['./app/js/**/**/*.js', './app/js/**/**/*.hbs'], ['reload-scripts']);
    gulp.watch('./app/styles/**/**/*.scss', ['reload-styles']);
    gulp.watch('./app/*.html', ['htmlmin']);
});

gulp.task('default', ['browser-sync', 'htmlmin', 'browserify', 'sass', 'imgmin', 'copyfonts', 'watch']);

gulp.task('build', ['html', 'browserify', 'build:sass', 'imgmin', 'copyfonts']);
