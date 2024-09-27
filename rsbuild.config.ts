import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { withZephyr } from 'zephyr-webpack-plugin';

const zephyrRsbuildPlugin = () => ({
  name: 'zephyr-rsbuild-plugin',
  setup(api) {
    api.modifyRspackCOnfig((rspackConfig) => {
      withZephyr()(rspackConfig);
    });
  },
});
export default defineConfig({
  plugins: [pluginReact(), zephyrRsbuildPlugin()],
});
