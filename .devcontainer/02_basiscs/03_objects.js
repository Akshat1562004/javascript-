//object literals
const mySym=Symbol("key1")//decelration of symbol
const Jsuser= {
    name: "AKSHAT",
    "full name": "Akshat Agrawal",//all variable are store in this format only 
    age:18,
    [mySym]:"mykey1",//syntax to refer to symbol
    //mysym:"myKey1" this will not show error but in interview mysym datatype is String not Symbol but we need to store it Symbol 
    location:"Bhopal",
    email:"akshat.shubhit@google.com",
 lastloginDays:["Monday","Tuesday"]
    
}
console.log(Jsuser.email);
console.log(Jsuser["email"]);//in this method of accesing object we need to put the variable into string qoute as behind the secene the variable inside the class is automatically store in the form of string 
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);
Jsuser.email="akshat@chatgpt.com"//will cahnge the email
Object.freeze(Jsuser)//applying this it will freeze Jsuser and no change will aplly after this 
Jsuser.email="akshat@microsoft.com"//email will not change here 
console.log(Jsuser);



