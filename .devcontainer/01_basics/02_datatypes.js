"use strict";//treat all JS code as a newer version 
let name="Akshat"
let age=18
let loggedIn=true
/*
number=>2 to power of 53
bigint
string
boolean
null
undefined
symbol
*/
console.log(typeof age ); // integer
console.log(typeof null ); // object
console.log(typeof undefined );//undefined
/* 
Primitive data types:
7 types 
BigInt,String,number,boolean,null,undefined,symbol
Reference:
Array,Objects,Function
*/
const id=Symbol('1223')
const anotherId=Symbol('1223')
console.log(id==anotherId);//false
const arrayName=["Akshat","Atharv","Ritik"]//Array
let myObj= {
    name: "Akshat",
    age: 22,
}//Object
const functions= function() {
console.log("Hello WOrld");
    
}//function 
