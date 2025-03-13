import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("build", shell.task("parcel build src/index.html"));
gulp.task("serve", shell.task("parcel src/index.html"));
gulp.task("default", gulp.series("serve"));



gulp.task("test", shell.task("mocha"));
gulp.task("cypress", shell.task("npx cypress run"));
