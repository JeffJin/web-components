module.exports = {
    entry: "./app/js/entry.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components', 'app']
    }
};