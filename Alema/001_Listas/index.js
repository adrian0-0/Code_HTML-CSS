/*
let nome = new Array(3)

nome [0] = "Fred"; 
nome [1] = "Newton";
nome [2] = "Einstein";

let n1 = 4%2


console.log("hello world" + n1);
*/
/*
function myFunction(name) {
    return "Hello " + name;
  }

  myFunction("ariel");
*/

let a = new Array(10);

function random () {
  let arr = Math.random(10)
  return Math.round(arr*10)
}

a = a.fill().map(random);

console.log(a);