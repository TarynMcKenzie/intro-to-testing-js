// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name){
    var result;

    if (name ===  undefined || name === false){
       result = "Hello, World!";
    } else {
        result = "Hello, " + name + "!";
    }
    return result;
}