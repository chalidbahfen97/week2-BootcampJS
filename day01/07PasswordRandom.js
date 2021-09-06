/**
 * nama = "code id"
 * randomPassword = "oceided"
 */

const myName = "codeid";

const random = Math.random() * 10;

const password = myName.charAt(Math.random() * myName.length)+
myName.charAt(Math.random() * myName.length)+
myName.charAt(Math.random() * myName.length)+
myName.charAt(Math.random() * myName.length)+
myName.charAt(Math.random() * myName.length)+
myName.charAt(Math.random() * myName.length);

console.log(password);
console.log();