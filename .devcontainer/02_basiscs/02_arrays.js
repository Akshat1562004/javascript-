const heros=["thor","Ironman","spiderman"]
const heros2=["superman","flash","batman"]
// heros.push(heros2)
console.log(heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
const allheros=heros.concat(heros2)
console.log(allheros);// join two arrays 
const all_new_heros=[...heros,...heros2]
console.log(all_new_heros);//join two or more arrays and more easy to use
const another_array=[1,2,3,[4,5,6],7,[6,7,,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray("AKSHAT"));//false
console.log(Array.from("AKSHAT"));//[ 'A', 'K', 'S', 'H', 'A', 'T' ]
console.log(Array.from({name:"AKSHAT"}));//intresting & important 
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]







