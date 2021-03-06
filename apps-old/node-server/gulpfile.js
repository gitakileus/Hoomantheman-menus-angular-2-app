var gulp = require('gulp')
var ts = require('gulp-typescript')
var tsProject = ts.createProject('tsconfig.json')

gulp.task('watch', function () {
  gulp.watch('src/index.html', ['index'])
  gulp.watch('src/**/*.ts', ['build'])
})

gulp.task('index', function () {
  return gulp.src(["src/index.html"]).pipe(gulp.dest("dist"))
})

gulp.task('build', function () {
  return tsProject.src()
  .pipe(tsProject())
  .js.pipe(gulp.dest('./dist'))
})
