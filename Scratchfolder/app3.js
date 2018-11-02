var fs = require('fs');
//reading and writing files
fs.readFile('readMe.txt' , 'utf8' , function(err , data){
    fs.writeFileSync('second.txt' , data);
});



