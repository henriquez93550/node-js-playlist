module.exports.counter = function(arr){
    return 'There are ' + arr.length + ' Elements in this array';
};

module.exports.adder = function(a, b){
    return `their sum of the 2 numbers is ${a+b}`;
};

module.exports.pi = 3.142;

//another example of this working 
/* module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}; */