const programming = ["java","js","python","golang","sql","oracle","postgre"];

const idxOracle =  programming.indexOf("oracle");
const idxPostgre = programming.lastIndexOf("postgre");
const idxJava = programming.includes("java");

//searching by first match
const nums = [2,4,19,15,198,7,1,1];
const bigNum = nums.find(element => element > 10); //element yang lebih tinggi mendekati 10

const bigNums = nums.filter(element => element > 10);//element yang lebih tinggi dari 10

//method map
const angka = [2,3,4,5,6,10,15];
const byFive = angka.map(element => element * 5);

//method every
const every = angka.every(element => element % 2 === 0); //return false karena ada element yang tidak memenuhi kriteria

//method some
const some = angka.some(element => element % 2 === 0);


console.log();