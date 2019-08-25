
var i;

// Number (integers, floating point number)
// String

i = 0.12; 
i = 123;
// i contains a number

i = undefined;
// i contains undefined

var str = 'Hello World';
// str contains a string

var num;
// num has undefined

null === undefined // false

var info = {
  first_name: 'Shashi',
  last_name: 'Sehkhar',
  age: 27,
  location: {
    city: 'Chennai',
    state: 'Tamil Nadu'
  }
};

// info is Object contining a person's details.
// Accessing objects using dot operator
var lastName = info.last_name; // 'Sehkhar'
var city = info.location.city; // 'Chennai'

info.last_name = 'Shekhar';
// info.last_name === 'Shekhar';
info.location.zip = '123456';

// Accessing objects using square brackets [].
var key = 'last_name';

var last_name = info[key];

console.log('last name is');
console.log(last_name);

console.log('info object is');
console.log(info);
