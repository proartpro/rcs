var someNumber = 123; //integer
var someDecimal = 3.14; //float
var someWord = 'Hello world!'; //string ''; ""; ``
var someTrue = true; // boolean (bool)
var someNothing = null; // null

var someArray = [
    'vaz', 
    'zaz', 
    'gaz', 
    'maz', 
    'bmw', 
    1, 
    3.14, 
    true,
]; // array



var johnny = {
    name: 'Johny',
    surname: 'Doe',
    fullName: 'Johnny Doe',
    age: '21',
}; //object


// var i = 'foo';
// console.log(i);
// i = 'bar';
// console.log(i);
// i = 'baz';
// console.log(i);
// i = 1;
// console.log(i);
// i = 2;
// console.log(i);
// i = 3;
// console.log(i);

//+
//-
//*
// /
// % - modules operator
// var number1 = 2;
// var number2 = 4;
// console.log(1 + 1);
// console.log(2 + 2 * 2);
// console.log(number1 + number2);
// console.log(number1 + 3);
// var number3 = number1 - number2;
// console.log(number3);
// console.log((2 + 2) * 2); // 8
// number1 = number1 + 1;
// number1 += 2;
// number1++;
// number1--;
// console.log(number1);

// console.log(1 / 0);

// console.log(4 % 2);

// console.log('foo ' + 'bar');

// console.log(1 + '1');
// console.log('1' + 1);



// == ir vienads
// != nav vienads (!= not, programeeshanaa)
// >
// <
// >=
// <=
// === Strict comparison (equal)
// !== Strict comparison (not equal)


if (true) {
    console.log('was true');
} else {
    console.log('was not true');
}


// var name = 'Kira';
//Anna => Čau Anna, Jānis => Whats up Jānis, anything else => Nepazīstu tevi.

// if (name == 'Anna') {
//     console.log('Čau Anna');
// } else {
//     if (name == 'Jānis') {
//     console.log('Whats up Jānis');
//     } else {
//     console.log('Nepazīstu tevi')
//     }
// }

//=

// if (name == 'Anna') {
//     console.log('Čau Anna');
// } else if (name == 'Jānis') {
//     console.log('Whats up Jānis');
// } else {
//     console.log('Nepazīstu tevi')
//     }

/*------------------------
var a = 1;
var b = 2;
var c = 3;


// && = and
// || = or
if (a == 2 && b == 3 || c == 3) {

}
------------------------*/

/*var name = 'Jānis';

//Jānis, vai Kārlis, vai Zane -> Čau zināmais cilvēk
//else -> Nepazīstu tevi

if (name == 'Jānis' || name == 'Kārlis' || name == 'Zane') {
        console.log('Čau zināmais cilvēk');
}   else {
    console.log('Nepazīstu tevi');
}
*/

//Using switch method
/*switch (name) {
    case 'Jānis':
        console.log('Čau zināmais cilvēk');
        break;
    case 'Kārlis':
        console.log('Čau zināmais cilvēk');
        break;
    case 'Zane':
        console.log('Čau zināmais cilvēk');
        break;
    default:
        console.log('Nepazīstu tevi');
}

var i = 0;
while (i < 10) {
    if (i < 5) {
        console.log(i);
    }
    i++;
}
console.log(i);*/

// Uzdevums ---------------------------
/*var i = 0;
while (i < 20) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}
i = 0
while (i < 0) {
    consol.log(i)
    i += 2;
}

// --------------------------------------

var i3 = 20;
while (i3 >= 0) {
        console.log(i3);
    i3--;
}
*/

/*var i = 0;
while (i < 20) {
    i++;
    if (i == 5) {
        continue;
    }
    console.log(i);
}
console.log(i);
*/


/*var i = 20;
do {
    console.log(i);
    i++;
} while (i < 20);
*/

/* for (var i = 0; i < 20; i++) {
    console.log(i);
}
*/

/*
for (var i = 20; i > 0; i--) {
    console.log(i);
}
*/

/*var cars = ['vaz', 'gaz', 'maz', 'zaz', 'uaz', 'bmw'];
for (var index = 0; index < cars.length; index++) {
    var car = cars[index];
    console.log(car);
}
*/

/* Izņemt tikai konkretu (2) mašīnu*
-------------------------------------
var cars = ['vaz', 'gaz', 'maz', 'zaz', 'uaz', 'bmw'];
for (var index = 0; index < cars.length; index++) {
    var car = cars[index];
    if (index == 2) {
    console.log(car);
    }
}
*/

/* Izņemt visas izņemot (2) mašīnu
------------------------------------

var cars = ['vaz', 'gaz', 'maz', 'zaz', 'uaz', 'bmw'];
for (var index = 0; index < cars.length; index++) {
    var car = cars[index];
    if (index != 2) {
    console.log(car);
    }
}
*/
/*
var cars = ['vaz', 'gaz', 'maz', 'zaz', 'uaz', 'bmw'];
var superCar = 'gaz';
for (var index = 0; index < cars.length; index++) {
    console.log(car);
    var car = cars[index];
    if (car == superCar) {
    console.log(car);
    }
}

*/

/*function addTwoNumbers(number1, number2) {
    var sum = number1 + number2;
    console.log(sum);
}

addTwoNumbers(2, 3);*/

//console.log(addTwoNumbers(2, 3));
/*-------------------------------------
//funkcija saņem divus parametrus - cilvēka vārdu un vecumu.
//Piem. Kārlis, 50
//Čau Kārli, Tev ir 50 gadi!.

function greetPerson(name, age) {
            console.log('Čau ' + name + ', Tev ir ' + age + 'gadi!');
}
    

greetPerson('Kārlis', 20);
--------------------------------------*/

/*MD--------------------------------

for (var i = 0; i <= 30; i++) {
    if (i % 2 == 0 && i % 3 == 0)
        console.log('Fizz Bazz');
    else if (i % 2 == 0) 
        console.log('Fizz');
    else if (i % 3 == 0)
        console.log('Bazz');
    else 
        console.log(i);
}
---------------------------------*/


/* Another variant----------------
for (var i = 0; i <= 30; i++) {
    var output = '';
    if (i % 2 === 0) {
        output = 'Fizz';
    }
    if (i % 3 === 0) {
    output += 'Bazz';
    }
    if (output === '') {
        output = i;
    }
    console.log(output);
}
---------------------------------*/

for (var i = 0; i <= 30; i++) {
    var output = '';
    if (i % 2 === 0) {
        output = 'Fizz';
    }
    if (i % 3 === 0) {
    output += 'Bazz';
    }
    if (output === '') {
        output = i;
    }
    console.log(output);
}