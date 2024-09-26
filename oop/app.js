
// factory function

// function personmaker(name, age){
//    const person = {
//     name: name,
//     age: age,
//     talk() {
//         console.log(`hello, i am ${this.name}`);
//     },
//    };

//    return person;
// }

// let p1 = personmaker("datta", 21);


// New Operator
// Constructors - doesn't return anything and Start with capital letter
function Person(name, age) {
    this.name= name,
    this.age= age
}

Person.prototype.talk= function  () {
    console.log(`hello, i am ${this.name}`);
}

let p1 = new Person("Datta", 21);
let p2 = new Person("eve", 19);