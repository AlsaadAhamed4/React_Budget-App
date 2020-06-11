const path = require('path'); //a node property

const webpack = require('webpack');

console.log(path.join(__dirname, 'Public')); //__dirname gives the absolute path name for any system

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //for css bundle / separate file

process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // for testing using jest , If we are testing then it will test as we have pass string on scripts, for heroku we dont have specify

//switching database 
if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
}
else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}

module.exports = (env) => {
    const isProduction = env === 'production';

    //creating a new instance by passing the file name 
    const MiniCSSExtract = new MiniCssExtractPlugin({
        filename: 'Styles.css'
    });

    return {
        entry: ['babel-polyfill', './src/app.js'],
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

        plugins: [
            MiniCSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_MESSAGING_APP_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_APP_ID),
                'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
            })
        ],

        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',  //for error handling is very important

        devServer: {
            contentBase: path.join(__dirname, 'Public'),
            historyApiFallback: true,   //this is for route to same page when multiple routes are there in single page, this says to load index.html when 404 found
            publicPath: '/dist/'  //this is because we changed the path to Public/dist from Public
        }
    };
};


