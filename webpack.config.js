const path = require('path'); //a node property

console.log(path.join(__dirname, 'Public')); //__dirname gives the absolute path name for any system

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'Public'),
        filename: 'bundle.js'
    },

    module: {       //for converting jsx to react js
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,   //this the regular expression where we are saying file the files ends with .js extensions 
                exclude: /node_modules/, //no need run babel-loader node 
            },
            {
                test: /\.s?css$/, //specifiying rules for css whenever .css file is found
                use: ['style-loader', 'css-loader', 'sass-loader']  //in use we can pass array of loader
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',  //for error handling is very important

    devServer: {
        contentBase: path.join(__dirname, 'Public'),
        historyApiFallback : true    //this is for route to same page when multiple routes are there in single page, this says to load index.html when 404 found
    }
}
