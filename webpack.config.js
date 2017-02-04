module.exports = {
    entry: './app/index.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    devtool: 'source-map',

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader!ts-jsx-loader' }
        ],
        preLoaders: [
            { test: /\.js$/, loader: 'source-map-loader' }
        ]
    }
};