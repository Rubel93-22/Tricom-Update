const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const through2 = require('through2');
const Vinyl = require('vinyl');
const path = require('path');

// Helpers
function titleCase(str) {
    return String(str)
        .replace(/^_/, '')              // remove leading underscore
        .replace(/\.[^.]+$/, '')        // drop extension
        .replace(/[-_]+/g, ' ')         // dashes/underscores -> space
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, m => m.toUpperCase());
}

function cleanFileName(basename) {
    return basename.replace(/^_/, ''); // strip leading underscore for output filename
}

// Paths
const paths = {
    html: {
        pages: 'src/html/pages/*.html',
        dest: 'dist/',
        watch: 'src/html/**/*.html'
    },
    scss: {
        src: 'src/assets/scss/main.scss',
        dest: 'dist/assets/css/',
        watch: 'src/assets/scss/**/*.scss'
    },
    css: {
        src: 'src/assets/css/**/*.css',
        dest: 'dist/assets/css/'
    },
    js: {
        src: 'src/assets/js/**/*.js',
        dest: 'dist/assets/js/'
    },
    img: {
        src: 'src/assets/img/**/*',
        dest: 'dist/assets/img/'
    },
    webfonts: {
        src: 'src/assets/webfonts/**/*',
        dest: 'dist/assets/webfonts/'
    }
};

// Clean dist
function clean() {
    return del(['dist']);
}

// Build HTML pages
function html() {
    return src(paths.html.pages)
        .pipe(
            through2.obj(function (pageFile, _, cb) {
                if (!pageFile.isBuffer()) return cb(null, pageFile);

                const basename = path.basename(pageFile.path);
                const outBase = cleanFileName(basename);
                const title = titleCase(basename);

                // Use path relative to src/ as section
                const sectionPath = path.relative(
                    path.join(pageFile.cwd, 'src'), // src/
                    pageFile.path
                ).replace(/\\/g, '/'); // e.g., 'html/pages/about.html'

                const wrapper = new Vinyl({
                    cwd: pageFile.cwd,
                    base: pageFile.base,
                    path: path.join(pageFile.base, outBase),
                    contents: Buffer.from(
                        `@@include('html/layouts/_template-top.html', {\n` +
                        `  "title": "${title}",\n` +
                        `  "section": "${sectionPath}"\n` +
                        `})\n` +
                        `@@include('html/layouts/_template-bottom.html')\n`
                    )
                });

                this.push(wrapper);
                cb();
            })
        )
        .pipe(fileInclude({ prefix: '@@', basepath: 'src' }))
        .pipe(dest(paths.html.dest))
        .pipe(browserSync.stream());
}

// Compile SCSS
function scss() {
    return src(paths.scss.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.scss.dest))
        .pipe(browserSync.stream());
}

// Copy CSS
function css() {
    return src(paths.css.src)
        .pipe(dest(paths.css.dest))
        .pipe(browserSync.stream());
}

// Copy JS
function js() {
    return src(paths.js.src)
        .pipe(dest(paths.js.dest))
        .pipe(browserSync.stream());
}

// Copy images
function images() {
    return src(paths.img.src, { encoding: false })
        .pipe(dest(paths.img.dest))
        .pipe(browserSync.stream());
}

// Copy webfonts
function webfonts() {
    return src(paths.webfonts.src, { encoding: false })
        .pipe(dest(paths.webfonts.dest))
        .pipe(browserSync.stream());
}

// Serve + watch
function serve() {
    browserSync.init({
        server: { baseDir: 'dist' }
    });

    watch(paths.html.watch, html);
    watch(paths.scss.watch, scss);
    watch(paths.css.src, css);
    watch(paths.js.src, js);
    watch(paths.img.src, images);
    watch(paths.webfonts.src, webfonts); // correct path
}

// Export tasks
exports.html = html;
exports.scss = scss;
exports.css = css;
exports.js = js;
exports.images = images;
exports.webfonts = webfonts;
exports.serve = serve;

// Default task
exports.default = series(
    clean,
    parallel(html, scss, css, js, images, webfonts),
    serve
);
