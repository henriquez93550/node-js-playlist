var fs = require('fs');

fs.unlink('./stuff', function(){
    fs.rmdir('stuff');
});