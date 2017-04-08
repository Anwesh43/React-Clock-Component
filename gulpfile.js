const gulp = require('gulp')
const browserify = require('browserify')
const fs = require('fs')
gulp.task('compile-es6',()=>{
    browserify('index.js').transform('babelify',{presets:['es2015','react']}).bundle().pipe(fs.createWriteStream('public/bundle.js'))
})
