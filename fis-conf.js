fis.config.merge({
	project: {
		exclude: /\/assets\/lib\/|\/node_modules\/|\/scripts\//i
	},
	roadmap: {
		path: [
			{
				reg: '/docs/**.md',
				useCompile: false
			}
		]
	},
	settings: {
		optimizer: {
			'uglify-js': {
				mangle: {
					except: 'exports, module, require, define, global'
				},
				compress: {
					drop_console: true
				}
			}
		}
	}
});
