const inquirer = require('inquirer');

inquirer.prompt([{
    name: 'p1', 
    message: 'How many points in phase 1?'
},
{
    name: 'p2', 
    message: 'How many points in phase 2?'
}])
.then((answers) => {
    console.log(answers);
    const finalPoints = ((parseInt(answers.p1)+ parseInt(answers.p2)));
    console.log(`Final points: ${finalPoints}`);
})
.catch((err) => console.log(err));