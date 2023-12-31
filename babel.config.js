module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '~/assets': './src/assets',
            '~/navigation': './src/navigation',
            '~/screens': './src/screens',
            '~/theme': './src/theme',
            '~/test-utils': './src/test-utils',
            '~/types': './src/types',
          },
          extensions: ['.js', '.ts', '.tsx'],
        },
      ],
    ],
  };
};
