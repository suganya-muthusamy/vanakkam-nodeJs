/*  This file will be executed  a asynchronus way.
 *  v8- will offload the asyn tasks to libuv, all will be done by libuv
 **/

const https = require("node:https");
console.log("first line"); // 1

const a = 20;
const b = 10;

// asyn funtion, so it will be offloaded to libuv even though the time is zero,
//  it will be executed after all the synchronous funtion done by v8 engine
setTimeout(() => {
  console.log("print right now - timer 0"); //4
}, 0);

// asyn funtion, so it will be offloaded to libuv, print after 5 secs
setTimeout(() => {
  console.log("print after 5 seconds"); //5
}, 5000);

function add(a, b) {
  console.log("addition==>", a + b); //2
}

add(a, b);

console.log("last line"); //3
