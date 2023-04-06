const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;

module.exports = {
	mode,
	target,
	devtool,
	watch: !devMode,
	entry: path.resolve(__dirname, "src", "index.js"),
	output: {
		path: path.resolve(__dirname, "public"),
		clean: true,
		filename: "bundle.[contenthash].js",
		assetModuleFilename: path.join("images", "[name].[contenthash][ext]"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html"),
			favicon: "./src/images/favicon.png",
		}),
		new FaviconsWebpackPlugin({
			logo: "./src/images/favicon.png",
			// Здесь можно указать другие опции
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext]",
				},
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				use: [
					{
						loader: "image-webpack-loader",
						options: {
							mozjpeg: {
								progressive: true,
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75,
							},
						},
					},
				],
			},
			{
				test: /\.svg$/,
				type: "asset/resource",
				generator: {
					filename: path.join("icons", "[name].[contenthash][ext]"),
				},
			},
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [require("postcss-preset-env")],
							},
						},
					},
					"sass-loader",
				],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		watchFiles: {
			paths: ["src/*"],
		},
		compress: true,
		port: 3000,
		open: true,
	},
};
