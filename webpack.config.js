const path = require('path'); //a node property

console.log(path.join(__dirname, 'Public')); //__dirname gives the absolute path name for any system

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //for css bundle / separate file

module.exports = (env) => {
    const isProduction = env === 'production';

    //creating a new instance by passing the file name 
    const MiniCSSExtract = new MiniCssExtractPlugin({
        filename: 'Styles.css'
    });

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'Public', 'dist'),
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
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',   //TODO does not show source maps in development mode. 
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',   //TODO does not show source maps in development mode. 
                            options: {
                                sourceMap: true
                            }
                        }
                    ]  //in use we can pass array/object of loaders
                }
            ]
        },

        plugins: [MiniCSSExtract],

        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',  //for error handling is very important

        devServer: {
            contentBase: path.join(__dirname, 'Public'),
            historyApiFallback: true,   //this is for route to same page when multiple routes are there in single page, this says to load index.html when 404 found
            publicPath: '/dist/'  //this is because we changed the path to Public/dist from Public
        }
    };
};


