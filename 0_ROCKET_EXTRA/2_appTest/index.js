const questions = [
    "insert 1",
    "insert 2",
]

const ask = ( index = 0) => {
    process.stdout.write(questions[index] + "\n\n\n");
}

ask();

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        ask(answers.length);
    }
    else{
    console.log(answers);
    process.exit();
    }
})

process.on('exit', () => {
    console.log(` 
    
    Answer 1: ${answers[0]}

    Answer 2: ${answers[1]}

    ${answers[0]}${answers[1]}
    
    `);
})