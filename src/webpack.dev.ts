import fs from "fs"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import path from "path"
import webpack from "webpack" //defineplugin

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, "../package.json"), "utf-8"))

export const webpackConfig = {
   name: "client",
   //  mode: "development", //why was it "none" -> because of yarn tests
   target: "web",
   entry: {
      gameclient: "./src/client/index.ts",
   },
   resolve: {
      extensions: [".ts", ".js", ".json"], //Webpack does not look for .ts files by default.
   },
   output: {
      //pathinfo: false,
      // path: path.resolve(__dirname, ".", "dist"),
      publicPath: "", //"/" mega important to reload newest version of index.html !
      filename: "[name].[contenthash].js", //to make sure cache updates!
   },
   devtool: "eval-cheap-source-map", //"eval" is faster but less transparent
   // laat heel mooi errors zien van builden? door onderstaande uit te commenten
   //  externals: [
   //     nodeExternals({
   //        modulesFromFile: true, //Read the modules from the package.json file instead of the node_modules folder.
   //        //,whitelist: ['webpack-dev-middleware']
   //     }),
   //  ],
   module: {
      rules: [
         //  {
         //     test: /\.(js|ts)x?$/,
         //     enforce: "pre",
         //     use: ["source-map-loader"], //otherwise source map console warnings
         //  },
         {
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env", "@babel/preset-typescript"],
                  plugins: ["@babel/plugin-proposal-optional-chaining", "@babel/transform-runtime"],
                  cacheDirectory: true,
               },
            },
         },
         {
            test: /\.css$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
               },
               "css-loader",
            ],
         },
         {
            test: /\.(png|svg|jpg|gif|ttf)$/,
            use: ["file-loader"],
         },
      ],
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: "[name].[contenthash].css",
      }),
      new webpack.DefinePlugin({
         "typeof CANVAS_RENDERER": JSON.stringify(true),
         "typeof WEBGL_RENDERER": JSON.stringify(true),
         //  "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV), //important to override webpack mode
         //  NODE_ENV: JSON.stringify(process.env.NODE_ENV),
         NICE_FEATURE: JSON.stringify(true),
         EXPERIMENTAL_FEATURE: JSON.stringify(false),
         VERSION: JSON.stringify(pkg.version + "dev"),
      }),
      // new SourceMapDevToolPlugin({
      //    filename: "[file].map",
      // }),
      new HtmlWebpackPlugin({
         template: "./src/client/html/index.html",
      }),
   ],
}
