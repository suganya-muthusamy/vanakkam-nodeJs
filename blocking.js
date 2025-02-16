/*  This file will be executed in a synchronous way, where we can see the blocking of main thread.s
 **/

console.log("first line"); //1

const a = 10;
const b = 20;

const { pbkdf2Sync, pbkdf2 } = require("node:crypto");

// this is synchronous way - will block the main thread. once it si executed only it will move to next line
const key = pbkdf2Sync("secret", "salt", 10000000, 30, "sha512");
console.log(key.toString("hex")); // 2

pbkdf2("secret", "salt", 1000000, 20, "sha512", (err, key) => {
  console.log(key.toString("hex")); // 5
});

function add(a, b) {
  console.log("The addition is ==> ", a + b); //3
}

add(a, b);

console.log("Last line"); //4
