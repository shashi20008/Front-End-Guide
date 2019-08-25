// console.log('hello world!');
// var arr = [ 123, 124, 125 ];

// var employees = [
//   'Shashi Shekhar', // 0
//   'Hemal Patel' // 1
// ];

// var employee1 = employees[0]; // Shashi Shekhar
// var employee2 = employees[1]; // Hemal Patel

// employees[100] = 'John Doe';

// var numOfEmp = employees.length; // 101

// console.log('allEmp:', employees);
// console.log('0th idx', employee1);
// console.log('1st idx', employee2);
// console.log('new 99th idx', employees[99]);
// console.log('new 100th idx', employees[100]);
// console.log('new 100th idx', employees[150]);
// console.log('total', numOfEmp);

// var arr2 = new Array(123); 

// Access array at its tail
var arr = [ 123 ];
arr.push(124);
arr.push(125, 126, 127);

var lastElem = arr.pop(); // 127
console.log('arr 1', arr);
console.log('lastElem', lastElem);
console.log('\n');
console.log('\n');

// Access array at it beginning
var arr2 = [ 123 ];

arr2.unshift(124);
arr2.unshift(125);

var firstElem = arr2.shift();

console.log('arr 2', arr2);
console.log('firstElem', firstElem);


