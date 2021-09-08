const programming = ["java","js","python","golang","sql","oracle","postgre"];

//get index sql
const sql = programming.indexOf("sql");

//deleting element from sql's index into last index
programming.splice(sql);

//deleting 2 indexs, start from 4th index
console.log(programming.splice(4,2));

//deleting 2 indexs, start from 4th index & insert new elements
console.log(programming.splice(4,2,".NET","SqlServer"));

console.log();