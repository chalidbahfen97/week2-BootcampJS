//cloning object

const employee = {
    firstName : "John",
    lastName : "Black",
    salary : 5000,
    portofolio : {
        ipk : 3.45,
        skill : ["java","oracle"] 
    }
}

//older version
const person = Object.assign({},employee);

//with spread operator
const emps = {...employee};

//destructure object
const {firstName,lastName,salary,ipk,portofolio} = employee;
console.log("first name : "+ firstName);
console.log("last name : "+ lastName);
console.log("salary : "+ salary);
console.log("portofolio : "+ portofolio);


console.log();