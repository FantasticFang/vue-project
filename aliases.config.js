const path = require('path')

const aliases = {
  '@': '.',
  '@src': 'src',
  '@router': 'src/router',
  '@views': 'src/router/views',
  '@layouts': 'src/router/layouts',
  '@components': 'src/components',
  '@assets': 'src/assets',
  '@utils': 'src/utils',
  '@state': 'src/state',
  '@store': 'src/state',
  '@modules': 'src/modules',
  '@apps': 'src/apps',
  '@data': 'src/data',
  '@plugins': 'src/plugins',
  '@styles': 'src/styles',
  '@services': 'src/services',
  '@pages': 'src/pages',
  '@mixins': 'src/mixins',
  '@tests': 'tests',
  '@config': 'src/config'
}

module.exports = {
  webpack: {}
}

for (const alias in aliases) {
  const aliasTo = aliases[alias]
  module.exports.webpack[alias] = resolveSrc(aliasTo)
}

function resolveSrc (_path) {
  return path.resolve(__dirname, _path)
}
