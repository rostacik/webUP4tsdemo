var gulp = require('gulp');
var mocha = require('gulp-mocha');
var ts = require("gulp-typescript");
var istanbul = require('gulp-istanbul');
var tslint = require("gulp-tslint");
var args = require('yargs').argv;
var sourcemaps = require("gulp-sourcemaps");
var merge = require("merge2");
var path = require("path");

function relativeSourceRoot(file, srcSubfolder, targetDir) {
    var sourceDir = path.dirname(file.relative),
        outputDir = path.join(file.cwd, targetDir, sourceDir),
        srcDir = file.cwd + "\\" + srcSubfolder;

    var res = path.relative(outputDir, srcDir);

    return res.replace("..\\", "");
}

// run mocha tests in the ./tests folder
gulp.task('runTests', function() {
    var src = args.src || './tests/**/*.*Tests*.js';

    return gulp.src(src, { read: false })
        // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe(mocha({
            "reporter": "mocha-jenkins-reporter",
            "reporterOptions": {
                "junit_report_name": "Tests",
                "junit_report_path": "test-report.xml",
                "junit_report_stack": 1
            }
        }));
});

// run mocha tests with coverage in the ./tests folder
gulp.task('runTestsWithCoverage', ['pre-test'], function() {
    var src = args.src || './tests/**/*.*Tests*.js';

    return gulp.src(src, { read: false })
        // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe(mocha({
            "reporter": "mocha-jenkins-reporter",
            "reporterOptions": {
                "junit_report_name": "Tests",
                "junit_report_path": "test-report.xml",
                "junit_report_stack": 1
            }
        }))
        // Creating the reports after tests ran 
        .pipe(istanbul.writeReports({
            reporters: ['html', 'text', 'text-summary', 'cobertura']
        }))
        // Enforce a coverage of at least 70% 
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 50 } }));
});

// just run mocha tests in the ./tests folder
gulp.task('runTests', function() {
    return gulp.src('./tests/**/*.Tests.js', { read: false })
        // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe(mocha({
            "reporter": "mocha-jenkins-reporter",
            "reporterOptions": {
                "junit_report_name": "Tests",
                "junit_report_path": "test-report.xml",
                "junit_report_stack": 1
            }
        }));
});

// TypeScript build for /src folder, pipes in .d.ts files from typings folder 
gulp.task('buildSrc', function() {
    var tsProject = ts.createProject("tsconfig.json", {
        typescript: require("typescript")
    });


    var tsResult = gulp
        .src(['src/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest('src')),
        tsResult.js.pipe(sourcemaps.write('.', {
            sourceRoot: function(file) { return relativeSourceRoot(file, 'src', 'src'); }
        })).pipe(gulp.dest('src'))
    ]);
});



// watch for any TypeScript changes
// if a file change is detected, run the TypeScript gulp tasks
gulp.task('watch', function() {
    gulp.watch('src/**/*.ts', ['buildSrc']);
});

gulp.task('pre-test', function() {
    return gulp.src(['src/*.js', 'src/**/*.js'])
        // Covering files 
        .pipe(istanbul())
        // Force `require` to return covered files 
        .pipe(istanbul.hookRequire());
});

//standalone ts lint task for command line
gulp.task('tslint', function() {
    return gulp.src(['**/*.ts', '!**/*.d.ts', '!node_modules/**'])
        .pipe(tslint())
        .pipe(tslint.report());
});