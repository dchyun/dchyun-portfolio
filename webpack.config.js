const path = require('path');
const HandlebarsWebpackPlugin = require("handlebars-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
module.exports = {
  mode: 'production',
  entry: {
    bundle: './src/app.js',
    home: './src/scripts/home.js',
    'project-detail': './src/scripts/project-detail.js',
    evolution: './src/scripts/evolution.js',
    migration: './src/scripts/migration.js',
    workshop: './src/scripts/workshop.js',
    about: './src/scripts/about.js',
    'project-card-evolution': './src/scripts/project-card-evolution.js',
    'project-card-migration': './src/scripts/project-card-migration.js',
    'project-card-workshop': './src/scripts/project-card-workshop.js',
    'tony-hyun': './src/scripts/tony-hyun.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'assets/[name][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|pdf|mp4)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [

    new HandlebarsWebpackPlugin({
      // path to hbs entry file(s). Also supports nested directories if write path.join(process.cwd(), "app", "src", "**", "*.hbs"),
      entry: path.join(__dirname, "src", "app", "*.hbs"),
      // output path and filename(s). This should lie within the webpacks output-folder
      // if ommited, the input filepath stripped of its extension will be used
      output: path.join(__dirname, "dist", "[name].html"),
      // you can also add a [path] variable, which will emit the files with their relative path, like
      // output: path.join(process.cwd(), "build", [path], "[name].html"),

      // data passed to main hbs template: `main-template(data)`
      // data: require(".src/app/data/project.json"),
      // or add it as filepath to rebuild data on change using webpack-dev-server
      data: path.join(__dirname, "src/app/data/project.json"),

      // globbed path to partials, where folder/filename is unique
      partials: [
        path.join(__dirname, "src", "app", "partials", "*.hbs")
      ],

      // register custom helpers. May be either a function or a glob-pattern
      // helpers: {
      //   nameOfHbsHelper: Function.prototype,
      //   projectHelpers: path.join(process.cwd(), "app", "helpers", "*.helper.js")
      // },

      // hooks
      // getTargetFilepath: function (filepath, outputTemplate) {},
      // getPartialId: function (filePath) {}
      onBeforeSetup: function (Handlebars) {},
      onBeforeAddPartials: function (Handlebars, partialsMap) {},
      onBeforeCompile: function (Handlebars, templateContent) {},
      onBeforeRender: function (Handlebars, data, filename) {},
      onBeforeSave: function (Handlebars, resultHtml, filename) {},
      onDone: function (Handlebars, filename) {}
    })
  ]
};