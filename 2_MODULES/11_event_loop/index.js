function a(){
    console.log("Executing A...");
}

function b(){   
    console.log("Executing B...");
}

function c(){
    console.log("Executing C...");
    a();
    b();
}
c();

