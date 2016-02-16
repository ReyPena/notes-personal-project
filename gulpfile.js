var gulp = require("gulp")
  , concat = require("gulp-concat")
  , uglify =  require("gulp-uglify")
  , uglifyCss = require("gulp-uglifycss")
  , ngAnnotate =  require("gulp-ng-annotate")
  , watch = require("gulp-watch")
  , del = require("del");

var paths = {
  // views and html files
  htmlTemplates: [
    "./core/app/views/**",
    "!./core/app/views/**/*.css"
  ],
  // js libraries
  jsLibs: [
    // this are the libraries
    "./bower_components/jquery/dist/jquery.js",
    "./bower_components/angular/angular.min.js",
    "./bower_components/angular-ui-router/release/angular-ui-router.min.js",
    "./bower_components/angular-sanitize/angular-sanitize.min.js",
    // this is for css libs and such
    "./bower_components/codemirror/lib/codemirror.js",
    "./bower_components/codemirror/mode/xml/xml.js",
    "./bower_components/codemirror/mode/javascript/javascript.js",
    "./bower_components/codemirror/mode/css/css.js",
    "./bower_components/angular-ui-codemirror/ui-codemirror.js",
    "./bower_components/summernote/dist/summernote.js",
    "./bower_components/angular-summernote/src/angular-summernote.js",
    // this is my own js
    "./core/app/app.js",
    "./core/app/**/*.js"
  ],
  // css libraries
  cssLibs: [
    // this is my external css
    "./bower_components/summernote/dist/summernote.css",
    "./bower_components/codemirror/theme/*.css",
    "./bower_components/codemirror/lib/codemirror.css",
    // this is my own css
    "./core/client/app/**/*.css",
    "./public/assets/style/css/paperTheme.css",
    "./public/assets/style/css/myStyle.css"
  ]
};

gulp.task('clean', function () {
  return del("public/views/**");
});

gulp.task("copyViews", ["clean"], function(){
  gulp.src(paths.htmlTemplates)
    .pipe(gulp.dest("./public/views"));
});

gulp.task("styles", function () {
  gulp.src(paths.cssLibs)
    .pipe(uglifyCss())
    .pipe(concat("mainStyle.css"))
    .pipe(gulp.dest("./public/assets/style"));
});

gulp.task("scripts", function () {
  gulp.src(paths.jsLibs)
    .pipe(ngAnnotate())
    .pipe(concat("mainScripts.js"))
    // .pipe(uglify())
    .pipe(gulp.dest("./public/scripts"));
});

gulp.task("watch", function() {
  // gulp.watch("gulpfile.js", ["default"]);
  gulp.watch(paths.jsLibs, ["scripts"]);
  gulp.watch(paths.cssLibs, ["styles"]);
  gulp.watch(paths.htmlTemplates, ["copyViews"]);
});

gulp.task("Working", function () {
  console.log("Working and ready");
});

gulp.task("default", ["watch", "copyViews", "styles", "scripts", "Working"]);
