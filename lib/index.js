if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./react-wavify.dev.js')
}
else {
  module.exports = require('./react-wavify.js')
}
