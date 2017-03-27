module.exports = {
  context: __dirname + "/src",

  entry: "./js/app.js",

  output: {
    filename: "./src/js/app-bundle.js",
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }
};

/*What is going on above?
    context - tells webpack where our files will be located
        __dirname - our current directory
        (in this case, + "/src" because our js files reside in the src folder)

    entry - the main application file, the start of the pipeline

    output - where our files will be outputted
    (in this case, we will output our js into another file in the same directory aptly called app-bundle.js)

    resolve - TO DO

    loaders - functions that transform files
        the babel-loaders test for .jsx files and exclude any node_module files



*/