/*--------------------------------------------------------------

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log('number 2 is even ' + isEven(2));
console.log('number 7 is even ' + isEven(7));
console.log('number 98 is even ' + isEven(98));
console.log('number 65 is even ' + isEven(65));
console.log('number 65254512 is even ' + isEven(65254512));

--------------------------------------------------------------

function isEven(number) {
    return number % 2 == 0 
}
console.log('number 2 is even ' + isEven(2));
console.log('number 7 is even ' + isEven(7));
console.log('number 98 is even ' + isEven(98));
console.log('number 65 is even ' + isEven(65));
console.log('number 65254512 is even ' + isEven(65254512));

--------------------------------------------------------------

function isEven(number) {
    return number % 2 == 0 ? 'is even' : 'is odd';
}
console.log('number 2 is even ' + isEven(2));
console.log('number 7 is even ' + isEven(7));
console.log('number 98 is even ' + isEven(98));
console.log('number 65 is even ' + isEven(65));
console.log('number 65254512 is even ' + isEven(65254512));

--------------------------------------------------------------*/

/*-----------------------------------------------------------

function fizzBazz(number) {
    if (number % 2 == 0 && number % 3 == 0) {
        return 'Fizz Bazz';
    }
    else if (number % 2 == 0) {
        return 'Fizz';
    }
    else if (number % 3 ==0) {
        return 'Bazz';
    }
    else if (number){
        return (number)
    }
}
console.log(fizzBazz(7));

----------------------------------------------------------*/

/*OR-------------------------------

function fizzBazz(number) {
    var output = ''
    if (number % 2 === 0) {
        output = 'Fizz';
    }
    if (number % 3 === 0) {
        output = 'Bazz';
    }
    if (output === '') {
        output = number;
    }
        return output
}
------------------------------------*/

/*---------

var isEven2 = function(number){
    return number % 2 == 0 ? 'is even' : 'is odd';
}
console.log('number 2 ' + isEven2(2));
console.log('number 7 ' + isEven2(7));
console.log('number 98 ' + isEven2(98));
console.log('number 65 ' + isEven2(65));
console.log('number 65254512 ' + isEven2(65254512));

-----------*/

var cat = {
    name: 'Muris', //īpašība
    hunger: 10, //īpašība
    feed: function (){          
            this.hunger--;
    }
}

/*console.log(cat);
cat.feed();
cat.feed();
cat.feed();
cat.feed();
cat.feed();
console.log(cat);*/

//console.log(Math.round(1.326594));

/*var foo = 'bar';
console.log(foo.lenght);

console.log(foo.split(''));
*/

function reverseWord(word) {
    return word.split('').reverse().join('');
}
console.log(reverseWord('banana'));


function palindrome(word) {
    return word == reverseWord(word);
}

console.log (palindrome("cat"))
