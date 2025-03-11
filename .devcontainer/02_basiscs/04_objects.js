//singleton object
const tinderUser=new Object()
tinderUser.id="132abc"
tinderUser.name="AKSHAT"

console.log(tinderUser);
const regularUser={
    email:"some@gmaqil.com",
    fullname:{
        usrname:{
            firstname:"akshat",
            lastname:"agraweal"
        }
    }
}
console.log(regularUser.fullname.usrname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3=Object.assign(obj1,obj2)
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);

const couse={
    cousename:"js hindi",
    couseprice:"99",
    courseInstructor:"Hitesh"

}
const{courseInstructor:Instructor}=couse
console.log(Instructor );


