(function(){
    var gulp = require('gulp');
    var $    = require('gulp-load-plugins')({lazy:false});
    var runSequence = require('run-sequence');
    var changed = require('gulp-changed');
    var plumber = require('gulp-plumber');
    var to5 = require('gulp-6to5');
    var sourcemaps = require('gulp-sourcemaps');
    var paths = require('../paths');
    var compilerOptions = require('../6to5-options');
    var assign = Object.assign || require('object.assign');



    var build = {
      source: {
            js   : buildSystem(paths.source.js ),
            html : buildHTML(paths.source.html ),
            style: buildCss(paths.source.style)
        },

      plugins:{
            js    : buildSystem(paths.plugins.js)    ,
            html  : buildHTML(paths.plugins.html)    ,
            fonts : buildFonts(paths.plugins.fonts)  ,
            styles: buildStylus(paths.plugins.styl.index)
        }
    }


    gulp
        .task('build',
              $.sequence( 'clean'
                         , 'build:source'
                         , 'build:plugins'
                         ))

    gulp
        .task('source:style' , build.source.css   )
        .task('source:html' , build.source.html )
        .task('source:js'   , build.source.js   )
        .task('build:source',
              $.sequence( 'source:js'
                        , 'source:html'
                        , 'source:style'
                        ))
    gulp
        .task('plugins:styles', build.plugins.styles )
        .task('plugins:fonts' , build.plugins.fonts  )
        .task('plugins:html'  , build.plugins.html   )
        .task('plugins:js'    , build.plugins.js     )
        .task('build:plugins' ,
              $.sequence( 'plugins:js'
                        , 'plugins:html'
                        , 'plugins:fonts'
                        , 'plugins:styles'
                        ))

    //////////////////////////

    // transpiles changed es6 files to SystemJS format

    // the plumber() call prevents 'pipe breaking' caused
    // by errors from other gulp plugins
    // https://www.npmjs.com/package/gulp-plumber
    function buildSystem(source) {

        return function(){

            return gulp
              .src(source)
              .pipe(plumber())
              .pipe(changed(paths.output, {extension: '.js'}))
              .pipe(sourcemaps.init())
              .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
              .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/' + paths.root }))
              .pipe(gulp.dest(paths.output));

        }

    }

    // copies changed html files to the output directory


    // this task calls the clean task (located
    // in ./clean.js), then runs the build-system
    // and build-html tasks in parallel
    // https://www.npmjs.com/package/gulp-run-sequence
    function buildHTML(source) {

        return function() {

            return gulp
              .src(source)
              .pipe(changed(paths.output, {extension: '.html'}))
              .pipe(gulp.dest(paths.output));

        }

    }


    function buildFonts(source) {

        return function() {

           return gulp
              .src(source)
              .pipe(gulp.dest(paths.output + '/fonts'))

        }

    }

    function buildStylus(source) {

        return function() {

            return gulp
              .src(source)
              .pipe($.plumber())
              .pipe($.stylus())
              .pipe($.concat('ui-aurelia.css'))
              .pipe($.autoprefixer())
              .pipe($.plumber.stop())
              .pipe(gulp.dest(paths.output))

        }

    }

    function buildCss(source) {

        return function() {
            console.log(source)
            return gulp
              .src(source)
              .pipe($.concat('system.css'))
              .pipe($.autoprefixer())
              .pipe(gulp.dest(paths.output))

        }

    }


})();
