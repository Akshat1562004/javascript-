let score="33"
console.log(typeof score)//string
let valueToNumber= Number(score)
console.log(typeof valueToNumber)//number
console.log(valueToNumber);//33
//node /workspaces/javascript-/.devcontainer/01_basics/01_variable.js
score="33vfb"
let valueToNumber2= Number(score)
console.log(typeof valueToNumber2)//number
console.log(valueToNumber2);//NaN
score=null
let valueToNumber3= Number(score)
console.log(typeof valueToNumber3)//number
console.log(valueToNumber3);//0
score=undefined
let valueToNumber4= Number(score)
console.log(typeof valueToNumber4)//number
console.log(valueToNumber4);//undefined
score= true
let valueToNumber5= Number(score)
console.log(typeof valueToNumber5)//number
console.log(valueToNumber5);//true-->1 & false-->0
/*
Conversion to boolean
1-->true & 0 --> false
"" -->false
"akshat" --> true 
*/
// ***************************************************** Operation ****************************************** 



