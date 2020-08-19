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
      'antd',
    ],
    [
      'import',
      {
        libraryName: '@byte-design/ui',
        libraryDirectory: isTestEnv ? 'lib/components' : 'es/components',
        transformToDefaultImport: false,
        style: true,
      },
      '@byte-design/ui'
    ],
    [
      'import',
      {
        libraryName: '@byte-design/icons',
        libraryDirectory: 'icons',
        camel2DashComponentName: false,
      },
      '@byte-design/icons'
    ],
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash'
    ],
  ],
};
