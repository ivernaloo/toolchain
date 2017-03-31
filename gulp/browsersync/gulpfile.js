var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


// static server
gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*").on("change", reload);
});


// static server
gulp.task('browser-sync2', function(){
    browserSync.init({
        server: {
            baseDir: "src/",
            routes: {
                "/node_modules": "node_modules"
            }
        },
        port: 3033,
        files: ["src/res/js/*.js","src/*.html"]
    });

    //gulp.watch("**/*").on("change", reload);
});
