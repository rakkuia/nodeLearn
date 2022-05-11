//externals
const inquirer = require("inquirer");
const chalk = require("chalk");

//internals
const fs = require("fs");

operation();

function operation(){

    inquirer
        .prompt([
            {
        type: 'list',
        name: 'action',
        message: 'What you want to do?',
        choices: [
            'Create Account',
            'Check Bank Balance',
            'Deposit',
            'Withdraw',
            'Exit',
            ],
        },
    ])
    .then((answer) => {

        const action = answer['action'];
        
        if(action === 'Create Account'){
            createAccount();
        }


    })
    .catch(err => console.log(err))

}

//create account

function createAccount() {
    console.log(chalk.bgGreen.black('Thank you for choosing R`s Bank! For us, you are less than a human! '));
    console.log(chalk.green('Please inform your personal info'));
    buildAccount();
}

function buildAccount() {

    inquirer.prompt([
        {
          name: 'accountName',
          message: 'Insert your name:'  
        }
    ]).then(answer=> {
        const accountName = answer['accountName'];

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts');
        }

        else if(fs.existsSync(`accounts/${accountName}.json`)){

            console.log(chalk.bgRed.black('This account already exists, pick another name'));
            buildAccount();
            return;
            }

        fs.writeFileSync(`accounts/${accountName}.json`,
        '{"balance": 0}', 
        function(err){
            console.log(err)
        },
    )
    console.log(chalk.green('Congrats! Now you are our newest victim!'));
    operation();

    

    }).catch(err => console.log(err));

}
