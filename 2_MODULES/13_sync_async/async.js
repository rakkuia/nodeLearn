const fs = require('fs');

console.log('Start');

fs.writeFile('Afile.txt', 'im async', function (err){
setTimeout(function () {
    console.log('Done!');
},1000)

})

console.log('End');