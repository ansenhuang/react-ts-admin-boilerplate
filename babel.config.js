const { LOCAL_IDENT_NAME } = require('./config/consts');
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
    [
      'react-css-modules',
      {
        exclude: 'node_modules',
        generateScopedName: LOCAL_IDENT_NAME,
      },
    ]
  ],
};
