var KEBI_URL = require('./config').issuesUrl
var openUrl = require('./utils/open-url')

module.exports = function() {
  return openUrl(KEBI_URL)
}
