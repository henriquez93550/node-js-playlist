const events = require('events');
 
class Person extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
}
 
let bob = new Person('bob');
let tina = new Person('tina');
let linda = new Person('linda');
let people = [bob, tina, linda];

people.forEach(person => {
    person.on('speak', msg => {
        console.log(person.name + ' said : ' + msg);
    });
});

bob.emit('speak', 'who wants burgers');
linda.emit('speak', 'hi bobby');
tina.emit('speak', 'um my crotch is itchy');


