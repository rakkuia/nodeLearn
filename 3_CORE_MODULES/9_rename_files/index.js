const fs = require('fs');

fs.rename('file.txt','renamedfile.txt', function (err) {

        if(err){
            console.log(err);
            return;
        }
        console.log('File renamed');

})