const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    target: 'web',
    mode: "development",
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.?tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
}