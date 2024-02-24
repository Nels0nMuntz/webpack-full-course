import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: false,
    // if you want to share static files using ngnix, you need to proxy on Index.html
    historyApiFallback: true,
    hot: true,
  };
}
