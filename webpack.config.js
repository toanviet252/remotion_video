const path = require('path');

module.exports = {
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
		],
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
};
