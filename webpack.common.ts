import path from "node:path";
import { fileURLToPath } from "url";
import { type Configuration } from "webpack";

import "webpack-dev-server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const common: Configuration = {
    entry: "./src/index.html",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    experiments: {
        html: true,
        css: true
    },
    module: {
        rules: [
            {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource"},
            {test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/, options: {configFile: "tsconfig.build.json"}}
        ]
    },
    resolve: {
        extensions: [".ts", ".js"],
        extensionAlias: {".js": [".ts", ".js"]}
    }
}

export default common;