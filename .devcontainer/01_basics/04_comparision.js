console.log(2>1);// true 
console.log(2==1);//false
console.log("2">1);//true
console.log("02">1);//true
console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true 
/* REASON 
because the equality check == and the comparison <,>,<=,>= works differently
Comparisons convert the null to a number ,treating it as 0 
that's why null>=0 is true and null>0 is false
*/
/*
== --> check the value only not the data type 
=== --> strictly check value as well as data type 
like "2"==2  --> True 
 but  "2"===2 --> False as both of different data types 
 */
console.log(undefined>0);//false
console.log(undefined<0);//false
console.log(undefined==0);//false
console.log(undefined>=0);//false
console.log(undefined<=0);//false





