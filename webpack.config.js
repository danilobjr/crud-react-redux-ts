const path = require('path');
const _ = require('lodash');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const commonConfig = {
	entry: {
        filename: PATHS.src + '/index.tsx'
    },
	output: {
        path: PATHS.build,
		filename: 'bundle.js'
	},
	resolve:{
		extensions: ['', '.scss', '.js', '.ts', '.tsx']
	},
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                include: /src/,
                loader: 'ts'
            },
            {
                test: /\.s?css$/,
                include: /src/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)$/,
                include: /src/,
                loader: 'url'
            }
        ]
    }
};

const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'start' || !TARGET) {
	const devConfig = {
        devTool: 'eval-source-map',
        devServer: {
            contentBase: PATHS.build,
        }
	};

	module.exports = _.merge(commonConfig, devConfig);
}
