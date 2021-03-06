require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        javascript: "./components/DataTable.js"
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets[]=react,presets[]=env'],
                //loaders: ["react-hot", 'babel-loader'],
                //query: {
                //    presets : ['es2015', 'react']
                //}
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    }
};