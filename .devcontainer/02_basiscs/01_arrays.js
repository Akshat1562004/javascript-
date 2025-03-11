const myArr=[0,2,2,3,4,5,true,"Akshat"]
console.log(myArr[7]);//Akshat
  const myArr2=new Array(1,2,3,4,5)
  myArr.push(6)
  console.log(myArr);// add 6 at last of arr
  myArr.pop()//remove the last element of the array 
  console.log(myArr);
  myArr.unshift(9)//add 9 at the starting of the arr

  console.log(myArr);
  myArr.shift()//remove the elemnt from the first index of array
  console.log(myArr);
  const newArr=myArr.join()
  console.log(myArr);
  console.log(typeof newArr);//string 
  //slice,splice
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr); 

  
  
  
  
  
  