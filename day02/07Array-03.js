//copy array

const emp = ["andi","charlie","delta","gita","hari","zeni"];

//same references
const empAll =  emp;

emp.push("iqbal");

//copy array
const permanent = Array.of(emp);
const freelance = ["dian","budi"];

//concat
const contractEmp = permanent.concat(freelance);

//Empty Array 
contractEmp.length = 0;

console.log();