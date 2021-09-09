import Employee,{contract} from "./employee.js";

const emp1 = new Employee("john","black",5000);
const emp2 = new Employee("arya","stark",4000,["java","oracle"],"kontrak",{ipk : 3.00});
const emp3 = new Employee("dian","kang",5000,["c#"]);

const kontrak1 = new contract("sule","eman",3500,["komedian","actor"],"kontrak",{ipk : 2.00},1000);

const listEmployee = [emp1,emp2,emp3,kontrak1];

const kontrak = listEmployee.filter(element => element.status === "kontrak");
console.log(kontrak);
console.log(kontrak1.toString());

const totalGaji = listEmployee.reduce((sum,gaji) => sum + gaji.salary,0);
console.log(`Total Gaji = ${totalGaji}`);

console.log();