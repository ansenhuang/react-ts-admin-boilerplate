const isTestEnv = process.env.NODE_ENV === 'test';

module.exports = {
  presets: ['react-app'],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: isTestEnv ? 'lib' : 'es',
        style: true,
      },
    ],
  ],
};
