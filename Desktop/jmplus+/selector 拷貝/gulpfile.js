// Modules & Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var cssminify = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var connect = require('gulp-connect'); 
var livereload = require('gulp-livereload');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');

// For HTML
    htmlreplace = require('gulp-html-replace'),
    minifyHTML  = require('gulp-minify-html');

// Evil Icons
var evilIcons = require("gulp-evil-icons");

// 01/06
var sass = require("gulp-sass");
    


// // Error Helper
// .on(Error(err) {
//     console.log(err);
//     // gulp.pipe(notify({ message: 'Error!!!' }));
// }
// .on("error", notify.onError("Error: <%= error.message %>"));
// .on('error', notify.onError(options)) // options is the same as the regular notify()
 
// public Task
gulp.task('public', function() {
 connect.server({
     root: 'public',
     livereload: true
   });
});



// Html Task
gulp.task('html', function () {
    var opts = {comments:false,spare:false,quotes:true};

    return gulp.src('*.html')
        // .pipe(htmlreplace({
        //     'css': 'css/all.min.css',
        //     'js': 'js/all.min.js'
        // }))  
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./public/'))
        .pipe(notify({ message: 'Html task complete' }));
});

 
// // Styles Task
// gulp.task('styles', function() {
//     return gulp.src('css/*.css')
//         .pipe(sourcemaps.init())
//         .pipe(concat('all.min.css'))
//         .pipe(cssminify())  
//         .pipe(sourcemaps.write())      
//         .pipe(gulp.dest('public/css'))
//         .pipe(notify({ message: 'Styles task complete' }));
// });

// 使用 "gulp-uglify" 最小化 CSS
gulp.task('styles', function () {
    // gulp.src('*.scss')
    gulp.src('css/*.css')
        // .pipe(gulpSass({
        //     outputStyle: 'compressed'
        // }))

        .pipe(gulp.dest('public/css'))
        .pipe(notify({ message: 'Styles task complete' }));
});


gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss') // Gets all files ending with .scss in scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('css'))
})


// // Scripts Task
// gulp.task('scripts', function() {
//     return gulp.src('js/*.js')
//         .pipe(sourcemaps.init())
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//         .pipe(concat('all.min.js'))
//         .pipe(uglify())
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('public/js'))
//         .pipe(notify({ message: 'Styles task complete' }));
// });

// 使用 "gulp-uglify" 最小化 JavaScript
gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});




// Images Task
gulp.task('images', function() {
    return gulp.src('assets/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/assets'))
        .pipe(notify({ message: 'Images task complete' }));
});

// // Evil Icons
// gulp.task('evil-icons', function () {
//   return gulp.src('*.html')
//     .pipe(evilIcons())
//     .pipe(gulp.dest('public'));
// });
 
 
// Clean Task
gulp.task('clean', function() {
    return gulp.src(['public/css/*', 'public/js/*, public/assets/*'], {read: false})
        .pipe(clean());
});
 
// Watch Task
gulp.task('watch', function() {
    gulp.watch('*.html', ['html']);
    gulp.watch('css/**/*.css', ['styles']);
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch('assets/*', ['images']);
    gulp.watch('scss/**/*.scss',['sass'])
 
    // Watch any files in public/, reload on change
    livereload.listen();
    gulp.watch(['public/**']).on('change', livereload.changed);
});
 
// Default Task
gulp.task('default', ['clean', 'html', 'styles', 'scripts', 
                     'images', 'public', 'watch']);