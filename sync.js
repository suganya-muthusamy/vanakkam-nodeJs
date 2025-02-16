/*  This file will be executed line by line in a synchronus way.
 *  all will be done by v8-engine
 **/

console.log("first line");

const a = 10;
const b = 20;

function add(a, b) {
  console.log("The addition is ==> ", a + b);
}

add(a, b);

console.log("Last line");
