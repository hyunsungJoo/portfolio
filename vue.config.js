const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  outputDir: './docs',
  publicPath: '/portfolio/',
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .tap(options => {
        return {
          name: '[name].[hash].[ext]',
          outputPath: 'assets',
        };
      });
  }
});
