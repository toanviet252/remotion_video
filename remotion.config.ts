// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: The configuration file does only apply if you render via the CLI !

import {Config} from 'remotion';

const path = require('path');

Config.setConcurrency(require('os').cpus().length);
// Config.setBrowserExecutable('/usr/bin/microsoft-edge-stable');
// Config.setCodec('h265');
Config.setImageFormat('jpeg');
Config.setOverwriteOutput(true);

Config.overrideWebpackConfig((configs) => {
	type Resolve = NonNullable<typeof configs.resolve>;
	type Alias = NonNullable<Resolve['alias']>;

	const resolve = configs.resolve ?? ({} as Resolve);
	const alias = resolve.alias ?? ({} as Alias);

	const currentDir = resolveCurrentDir();

	alias['@'] = path.resolve(currentDir, 'src');

	resolve.alias = alias;
	configs.resolve = resolve;

	console.log(alias);

	return configs;
});

function resolveCurrentDir(): string {
	let dir = __dirname;
	const idx = dir.indexOf('node_modules');
	if (idx >= 0) {
		dir = dir.substring(0, idx);
	}
	return dir;
}
