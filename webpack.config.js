		var webpack = require('webpack');
		var path = require('path');
		var ignoreFiles = new webpack.IgnorePlugin(/\.\/jquery.js$/);
		var config = {
		    devtool: 'eval-source-map',
		    context: path.join(__dirname, 'App'),
		    entry: {
		        login: './js/views/login.js',
		        register:'./js/views/register.js',
		        index:'./js/views/index.js',
		        vendors: ['jquery', 'moment']
		       
		    },
		    output: {
		        path: path.join(__dirname, 'App/js-built/unminify'),
		        filename: '[name].js'
		    },
		    externals: {
		    },
		    module: {
		        //加载器配置
		        loaders: [
		            { test: /\.css$/, loader: 'style-loader!css-loader' },
		            {
		                test1: /\.js$/,
		                // excluding some local linked packages.
		                // for normal use cases only node_modules is needed.
		                exclude: /node_modules/,
		                loader: 'babel'
		            }
		        ]
		    },
		    babel: {
		        presets: ['es2015'],
		        plugins: ['transform-runtime'],
		    },
		    plugins: [
		        new webpack.HotModuleReplacementPlugin(),
		        new webpack.ProvidePlugin({
		            $: "jquery",
		            jQuery: "jquery",
		            "window.jQuery": "jquery",
		            moment: "moment",
		           
		        }),
		       new webpack.optimize.CommonsChunkPlugin({
		           name: "vendors",
		           filename: "vendor.js",
		           minChunks: Infinity
		       }),//第三方库打包生成的文件
		        ignoreFiles
		    ],
		    devServer: {
		        contentBase: path.join(__dirname, 'build'),
		        publicPath: "http://localhost:8080/build/",
		        colors: true,
		        historyApiFallback: true,
		        hot: true,
		        inline: true
		    },
		};
		
		
		if (process.env.NODE_ENV === 'production') {
		    config.devtool = false;
		    config.output.path = path.join(__dirname, 'App/js-built/minify');
		    config.plugins = config.plugins.concat([
		      new webpack.optimize.OccurenceOrderPlugin(),
		      new webpack.optimize.UglifyJsPlugin({
		          compress: { warnings: false }
		      }),
		      new webpack.DefinePlugin({
		          'process.env': { NODE_ENV: JSON.stringify('production') }
		      })
		    ]);
		};
		
		module.exports = config;
		
