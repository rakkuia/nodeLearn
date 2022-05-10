const chalk = require('chalk');

const value = 5;


if(value>=6){
console.log(chalk.green(`Congratulations`));
} 
else{
console.log(chalk.red.bold(`I hate you`));
}

