/*jshint esversion: 9 */

/************ Const & Let **************** */ 
// const name = 'John'; // with const we cannot re-assign
let name = 'Jack'; 
let test;

const person = {
    name: 'Jack',
    age: 34
};
person.name = 'alicia';

const nums = [1, 2, 3, 4];
nums.push(5);
console.log(name);
console.log(person.name);
console.log(nums);

/************ Arrow Functions **************** */ 
// function sayHello() {
//     console.log('Hello');
// }

const sayHello = (name) => console.log(`Hello ${name}`);
sayHello('Alicia');

/************ Foreach **************** */ 
const fruits = ['Apples', 'Oranges', 'Grapes'];
fruits.forEach((fruit, index) => console.log(`${index + 1}. ${fruit}`));

/************ Map **************** */
const singleFruit = fruits.map((fruit) => fruit.slice(0, -1).toUpperCase());
console.log(singleFruit);

/************ Filter **************** */
const people = [
    {id: 1, name: 'Karen'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'John'},
    {id: 4, name: 'Jane'},
];
const people2 = people.filter(person => person.id !== '2');
console.log(people2);

/************ Spread **************** */
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];
console.log(arr3);

const person1 = {
    name: 'Brad',
    age: 36
};

const person2 = {
    ...person1,
    email: 'brad@gmail.com'
};
console.log(person1);

/************ Destructuring **************** */
const profile = {
    name1: 'John Doe',
    address: {
        street: '40 Main st',
        city: 'Boston'
    },
    hobbies: ['movies', 'music']
};
const { name1, address, hobbies } = profile;
const { street, city } = profile.address;
console.log(street, city);
console.log(name1, address.street, hobbies[0]);

/************ Classes **************** */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
const person4 = new Person('Peter', 33);
const person5 = new Person('Sara', 23);
console.log(person4.name);
console.log(person5.greet());

/************ Subclasess **************** */
class Customer extends Person {
    constructor(name, age, balance) {
        super(name, age);
        this.balance = balance;
    }

    info() {
        return `${this.name} owes $${this.balance}.00`;
    }
}

const customer1 = new Customer('Kevin', 32, 300);
console.log(customer1.name);
console.log(customer1.info());

/************ Modules **************** */

// file 1 (file1.js)
// export const name3 = 'Jeff';

// file 2 (file2.js)
// import { name3 } from './file1';