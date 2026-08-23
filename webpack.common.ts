import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";
import { fileURLToPath } from "url";
import { type Configuration } from "webpack";

import "webpack-dev-server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const common: Configuration = {
    entry: "./src/index.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {test: /\.css$/i, use: ["style-loader", "css-loader"]},
            {test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/, options: {configFile: "tsconfig.build.json"}}
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}

export default common;