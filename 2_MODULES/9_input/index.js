const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
);

readline.question("What you know about...? ", (answer) => {
    if(answer === "deep") {
        console.log(" get out of my headget out of my headget out of my headget out of my head")
    }
    else{
    console.log(`rolling down in the ${answer}`);
    } 
    readline.close();
});