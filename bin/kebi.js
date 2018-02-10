#!/usr/bin/env node

var KEBI_URL = require('../config').issuesUrl

var openUrl = require('../utils/open-url')

// 打开kebi的ISSUES页
openUrl(KEBI_URL)
