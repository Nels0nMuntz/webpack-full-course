import { resolve as _resolve } from 'path';
import { Configuration } from 'webpack';
import { BuildPaths, BuildPlatform } from './config/build/types/types';
import { buildWebpack } from './config/build/webpack';

type Mode = 'development' | 'production';

interface EnvVariables {
  mode: Mode;
  port: number;
  platform?: BuildPlatform;
  analyzer?: boolean;
}

export default (env: EnvVariables) => {

  const paths: BuildPaths = {
    entry: _resolve(__dirname, 'src', 'index.tsx'),
    output: _resolve(__dirname, 'build'),
    html: _resolve(__dirname, 'public', 'index.html'),
    public: _resolve(__dirname, 'public'),
    src: _resolve(__dirname, 'src'),
  };

  const config: Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer ?? false,
    platform: env.platform ?? "desktop",
  });

  return config;
};
