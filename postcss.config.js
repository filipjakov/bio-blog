module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        stage: 3,
        autoprefixer: {
          flexbox: false,
          grid: false,
        },
        features: {
          'custom-properties': false,
          'nesting-rules': true
        },
      },
    ],
  ]
}