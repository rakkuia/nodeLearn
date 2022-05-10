const x = "1";


//check if x is a number

if(!Number.isInteger(x)){
    throw new Error('NOT A NUMBER');
}

console.log('Keep going');