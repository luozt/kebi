var fs = require('fs');

module.exports = {
  test: function() {
    console.log('kebi!'+new Date());
  },
  getContent: function() {
    var content = fs.readFileSync('./test.html').toString();
    return content;
  }
};

