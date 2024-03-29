const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/css/bootstrap.min.css'
], 'public/css/styles.css')
.scripts([
    'resources/js/bootstrap.bundle.min.js',
], 'public/js/scripts.js')
.version();