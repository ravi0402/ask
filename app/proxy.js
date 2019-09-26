const devProxy = {
	'/api': {
		target: 'https://www.toppr.com',
		pathRewrite: { '^/api': 'https://www.toppr.com/api' },
		changeOrigin: true,
	},
};

module.exports = devProxy;
