// # primitive datatypes 
/*
there are 7 types of primitive datatypes.
primitve datatypes are call by value datatypes
we are not given the original reference of the data they are copied and then 
are given to us.
changes are done in the copy value and not in the original value of the data.

1: string => 
2: number
3: boolean => ture/ false  
4: null => empty
5: undefined =>  variable is only declared value is not given
6: symbol => for uniqueness
7: bigInt => for big integers
*/
// EXAMPLES:
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const tempOutSide = null
let userName;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 235888787889489268984n


// javaascript is a dynamically typed language.

// # refference/ non-primitive datatype
/*
we are give the direct refference of the value in the memory
types of non-primitive datatypes are:
1 : arrays => 
2: objects =>
3  : functions =>  
*/
// EXAMPLES:
const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "misba",
    age: 20

}
const myFunction = function() {
    console.log("hello world");

}
console.log(typeof tempOutSide);
// to find the type of the variable.