function sayMyName(){
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("T");
    
}
sayMyName()
function addTwoNumbers(number1,number2){
console.log(    number1+number2);

}
addTwoNumbers()//NaN
addTwoNumbers(3,4)//7
addTwoNumbers(3,"4")//34
const result=addTwoNumbers(3,5)
console.log(result);//undefined


function addTwoNumbers1(number1,number2){
        let result1 =number1+number2
        return result1//returns result 
        console.log("Akshat");//cannot print as after resturn nothing can be executed inside the function 
     // return number1+number2 also return sum without new variable 
    }
    //shooping cart
    function calculateCartPrice(...num){
   return num
    }
    console.log(calculateCartPrice(200,400,600));//[ 200, 400, 600 ]
    function calculateCartPrice1(val1,val2,...num){
        return num
         }
         console.log(calculateCartPrice1(200,400,800,600));//[ 800, 600 ]

    const user={
        username : "AKSHAT",
        price:199
    }
    function handleObject(anyobject){
        console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
        
    }
     handleObject(user)
