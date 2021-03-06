// -----------------------------------------------------


// CONSOLE LOGS, PROMPTS, AND ALERTS

// // Logs the message in browser's console
// console.log('Hello.');

// // the webpage sends out an alert as a banner
// alert('whats good fam');


// -----------------------------------------------------


// VARIABLES IN JS are declared using var

// // this is a string variable
// var i = 'imma variable';
// console.log(i);

// // this is a number variable
// var num = 365;
// console.log(num);

// var age = prompt('What is your age?');

// // editing the inner html of an element
// document.getElementById('ageFam').innerHTML = age;


// -----------------------------------------------------


// NUMBERS IN JAVA SCRIPT

// var num1 = 5.7;
// console.log(50 / 5);

// // inline increment
// console.log((++num1));

// Divide by /, Multiple by *, Remainder by *

// // Incremement/decrement by a particular number
// var num = 10;
// num += 20;
// console.log(num);


// -----------------------------------------------------


// FUNCTIONS IN JAVASCRIPT

// // first create the function, then call it
// function fun() {
//     alert('This is a function.');
// }

// fun();


// // Function to get username and say hello (non-parameterized)
// function nameHello () {
//     var name;
//     name = prompt('What is your name?')
//     alert('Hello there, '+name+'.');
// }
// nameHello();
    
// // Function to get username and say hello (parameterized)
// function nameHello (name) {
//     var result = 'Hello there, '+name+'.';
//     alert(result);
// }   

// var string = prompt('What is your name?');
// nameHello(string);

// function sumNumbers (num1, num2) {
//     var result = num1 + num2;
//     console.log(result)
// }

// sumNumbers(5, 5);
// sumNumbers('Hello ', 'Parth');


// -----------------------------------------------------


// WHILE AND FOR LOOPS IN JS

// // while
// var num = 0;
// while (num < 100) {
//     num++;
//     console.log(num);
// }

// // for 
// for (let num = 0; num <= 100; num++) {
//     console.log(num);
// }


// -----------------------------------------------------


// DATA TYPES IN JS

// let yourAge = 18; // number
// let yourName = 'Parth' // string
// let name = {first: 'Parth', last: 'Sharma', age: 18}; // object
// let state = true; // boolean
// let groceries = ['apples', 'peanut butter', 'chips']; // array
// let random; // undefined
// let nothing = null; // value null


// -----------------------------------------------------


// STRINGS IN JS

// let fruit = 'banana';

// // \n indicated a new line
// let moreFruits = 'banana\napple';
// console.log(moreFruits);

// let name = 'Parth Sharma';

// // some common functions we can use
// console.log(name.length);
// console.log(name.indexOf('Sharma'));
// console.log(name.slice(0,6));
// console.log(name.replace('Parth', 'Vedaant'));
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.concat(' is my name.'));
// console.log(name.charAt(2));
// console.log(name[0]);
// console.log(name.split(' '));


// -----------------------------------------------------


// ARRAYS IN JS

let fruits = ['banana','apple','orange','kiwi'];
fruits = new Array('banana', 'apple','orange','kiwi');

// alert(fruits[1]);

fruits[0] = 'pineapple';
// alert(fruits[0]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// PAUSE ON JAVA SCRIPT DEV TUTORIAL FOR DJANGO FRAMEWORK
// https://www.youtube.com/watch?v=Qqx_wzMmFeA&t=44s