const path = require("path");

/** @type {import("webpack").Configuration} */
module.exports = [
  {
    mode: "production", // production mode
    entry: "./index.ts", // entry point of your application
    output: {
      filename: "index.js", // output file name
      path: path.resolve(__dirname, "dist"), // output folder
      libraryTarget: "umd", // this allows your module to be used via require() and as a global
      globalObject: "this", // this ensures that 'this' is 'window' in a browser environment
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts"],
    },
  },
  {
    mode: "production", // production mode
    entry: "./index.ts", // entry point of your application
    output: {
      filename: "index.mjs", // output file name
      path: path.resolve(__dirname, "dist"), // output folder
      libraryTarget: "module", // this allows your module to be imported via import()
    },
    experiments: {
      outputModule: true, // this enables the outputModule option
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts"],
    },
  },
];
