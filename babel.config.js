module.exports = {
  'env': {
    'development': {
      'presets': [
        '@babel/preset-env',
        '@babel/preset-react'
      ],
    },
    'production': {
      'presets': [
        ['@babel/preset-env', { 'targets': { 'ie': 9, 'uglify': true } }],
        '@babel/preset-react'
      ],
    },
    'test': {
      'presets': [
        '@babel/preset-env',
        '@babel/preset-react'
      ],
      'plugins': ['@babel/plugin-transform-runtime']
    }
  }
};
