const mix = require('laravel-mix');
const path = require('path')
require('vuetifyjs-mix-extension')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.ts', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .vuetify('vuetify-loader', {
        match(originalTag, { kebabTag, camelTag, path, component }) {
            if (kebabTag.startsWith('core-')) {
                return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
            }
        }
    })


mix.webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            Components: path.resolve(__dirname, 'resources/js/components'),
            Views: path.resolve(__dirname, 'resources/js/views'),
            Models: path.resolve(__dirname, 'resources/js/models'),
            Utils: path.resolve(__dirname, 'resources/js/utils'),
            Sass: path.resolve(__dirname, 'resources/sass'),
            Img: path.resolve(__dirname, 'resources/img'),
            Fonts: path.resolve(__dirname, 'resources/fonts'),
            'lodash-es': 'lodash',
        },
        extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"],
    },
    output: {
        filename: '[name].js',
        chunkFilename: 'js/[name].js?id=[contenthash]',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        ]
    },
})