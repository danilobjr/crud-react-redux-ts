const path = require('path');
const _ = require('lodash');

const paths = {
	src: 'src/index.js',
	build: 'build/build.js'
};

const commonConfig = {
	entry: path.join(__dirname, paths.src),
	output: {
		filename: paths.build
	},
	resolve:{
		extensions: ['', '.js']
	}
};

const TARGET = process.env.npm_lifecycle_event;

var configuration = {};

if (TARGET === 'start' || !TARGET) {
	const devConfig = {
		
	};

	configuration = _.merge(commonConfig, devConfig);
}

module.exports = configuration;