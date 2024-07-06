// stack and heap
// stack is used in primitive datatypes
// whenever we are using stack the variable we are declaring 
// we will only get the copy of that variable.

// heap is used in non-primitive datatypes
// whenever we use heap t declare the variable 
// we will get the reference of the variable 
// means we get the roginal  value. 
let myYoutubeName = "misba Nazir.com"
let anotherName = myYoutubeName
anotherName = "chai aur code"
console.log(myYoutubeName);
console.log(anotherName);
let userOne = {
    email: "user@google.com",
    upi: "user@bly"

}
let userTwo = userOne
userTwo.email = "misba@google.com"
console.log(userOne.email);
console.log(userTwo.email);