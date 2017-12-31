var fs = require('fs');

fs.writeFileSync('test.html', '<html><body>'+ new Date() +'</body></html>');

console.log('kebi test.html made!');


