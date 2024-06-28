const accountId = 144553
let accountEmail = "misba@google.com"
var accountPassword = "12345"
accountCity = "anatatnag" 
let accountState;
//accountId = 2 // not allowed
accountEmail = "mi@mi.com"
accountPassword = "35667"
accountCity = "bangluru"
console.table([accountEmail,accountId,accountPassword,accountCity, accountState]);
/*
peffered not to use var 
because the issue of block scope and functional scope
*/
console.log(accountId);
