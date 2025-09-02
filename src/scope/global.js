// variable 

var a ; // declarando 
var b = 'b' // declaramos y asignamos 
b= 'bb'  // reasignando 
var a = 'aa'// redeclarar 

// global scope 

 var fruit = 'Apple';  // global 
 // 
    console.log(fruit);
function bestFruit(){
    console.log(fruit);
}

bestFruit()

function countries(){
    country = 'peru'; // global
    console.log(country);
}
countries();

console.log(country);