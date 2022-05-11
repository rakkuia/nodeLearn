const fs = require('fs');

if(!fs.existsSync('./dir')){

    console.log("Creating Dir");
    fs.mkdirSync('./dir');
}

else{
    console.log("Already exists");
}