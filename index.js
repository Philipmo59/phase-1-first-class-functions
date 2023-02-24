
function receivesAFunction(cb){
    console.log(cb());
}   
function returnsANamedFunction() {
    return receivesAFunction
}
function returnsAnAnonymousFunction(){
    return function () {return "Bye Then"}
}

receivesAFunction(function() {return "Hello there"})

