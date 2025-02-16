/*  This file will be executed  a asynchronus way.
 *  v8- will offload the asyn tasks to libuv, all will be done by libuv
 **/

const https = require("node:https");
console.log("first line"); // 1

const a = 20;
const b = 10;

// asyn funtion, so it will be offloaded to libuv
setTimeout(() => {
  console.log("print after 5 seconds"); //5
}, 5000);

// asyn funtion, so it will be offloaded to libuv
https.get(
  "https://dummyjson.com/products",
  (res) => console.log("products fetched") //4
);
function add(a, b) {
  console.log("addition ===> ", a + b); //2
}

add(a, b);

console.log("last line"); //3
