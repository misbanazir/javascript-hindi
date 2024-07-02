console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 2);
console.log("2" > 1);
console.log("02" > 1);
console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);
/*
the reason is that an equatity check == and comparisions ><>=<= works diferentlty
comparision converts null to the number, treating it as zero/0
thats why null >=0 is true, and null > 1 / null null <2 is false. 
*/
console.log(null < 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined <= 0);
// we have to avoid these types of comparisions. 

console.log("2" === 2);
// === it checks the value strictly that means it checks the datatype of the value also.