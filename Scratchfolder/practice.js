//normal function statement
/* function sayHi(){
    console.log('hi');
}
sayHi(); */

function callFuntion(fun) {
    fun();
}


//function expression
var sayBye = function(){
    console.log('bye');
};

callFuntion(sayBye);

