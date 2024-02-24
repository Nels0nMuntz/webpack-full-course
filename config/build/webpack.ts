import { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';
import { buildPlugins } from './plugins';
import { buildLoaders } from './loaders';
import { buildResolvers } from './resolvers';
import { buildDevServer } from './devServer';

export function buildWebpack(options: BuildOptions): Configuration {

  const { mode, paths } = options;
  const isDev = mode === 'development';

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    devServer: buildDevServer(options),
  };
}
