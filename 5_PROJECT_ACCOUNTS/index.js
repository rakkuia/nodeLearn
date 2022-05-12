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

        else if(action === 'Deposit'){
            deposit();
        }

        else if(action === 'Check Bank Balance'){
            getAccountBalance();
        }

        else if(action === 'Withdraw'){
            withdraw();

        }

        else if(action === 'Exit'){
            console.log(chalk.bgBlue.black('Bye'));
            process.exit();

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


function deposit(){

    inquirer.prompt([
        {
            name:'accountName',
            message: 'Please enter your account'
    }
])
.then((answer) => {
    const accountName = answer['accountName'];

    if(!checkAccount(accountName)){
        return deposit();
    }

    inquirer.prompt([
        {
            name: 'amount',
            message: 'How much do you want to deposit'
    }
]).then((answer) => {

    const amount = answer['amount'];

    addAmount(accountName, amount);
    operation();

}).catch(err => console.log(err));

})
.catch(err => console.log(err));
}

function checkAccount(accountName){

    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('This account does not exists, please insert another name!'));
        return false;
    }

return true;

}

function addAmount(accountName, amount){

    const accountData = getAccount(accountName);

    if(!amount){
        console.log(chalk.bgRed.black('Error, try again later'));
        return 0;
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err){
            console.log(err);
        },
    )

    console.log(chalk.green(`The value of U$${amount} in your account`));

}
    

function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })

    return JSON.parse(accountJSON);
}

function getAccountBalance(){

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Please enter your account'
        }]).then((answer) => {
           
            const accountName = answer["accountName"];

            if(!checkAccount(accountName)){
                return getAccountBalance();
            }

            const accountData = getAccount(accountName);

            console.log(chalk.bgBlue.black(
                `Your account balance is U$${accountData.balance}`
            ));

        operation();

        }).catch(err => console.log(err));


}

function withdraw(){

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Please enter your account'
        }
    ]).then((answer) => {

        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return withdraw();
        }

        inquirer.prompt([
            {
                name:'amount',
                message: 'How much do you want to withdraw?'
            }
        ]).then((answer) => {

            const amount = answer['amount'];

            removeAmount(accountName, amount);
            

        }).catch(err => console.log(err));


    }).catch(err => console.log(err));

}

function removeAmount(accountName, amount){

    const accountData = getAccount(accountName);

    if(!amount){

        console.log(chalk.bgRed.black('Error, try again later'));
        return withdraw();
    }


    if(accountData.balance < amount){
        console.log(chalk.bgRed.black('Unavailable balance'));
        return withdraw();
    }


    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err){
            console.log(err);
        }
    )

    console.log(chalk.green(`You have successfully withdrawn the amount of U$${amount}`));
    operation();

}