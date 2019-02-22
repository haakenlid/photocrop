module.exports = function(api) {
  api.cache(true)
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false, // webpack tree shaking requires this
        useBuiltIns: 'usage', // import only polyfills when needed?
      },
    ],
    '@babel/preset-react',
  ]
  const plugins = [
    ['@babel/plugin-proposal-class-properties', { loose: false }],
  ]
  return { presets, plugins }
}
