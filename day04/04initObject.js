//object declaration
const blankObject = {};
const blankObject2 = new Object();

//call object
if(Object.keys(blankObject).length === 0){
    console.log("is blank object");
}

const employee = {
    firstName : "John",
    lastName : "Black",
    salary : 5000
}

Object.freeze(employee); //cara protect employee supaya tidak bisa diubah datanya

employee.firstName = "Don";
employee.lastName = "Snow";
employee.salary = 7500;

if (Object.isFrozen(employee)) {
    console.log("Employee status frozen");
}

const address = {
    street = "Jl. Limboto 20",
    city = "Bogor"
}

const employeeInfo = {...employee,...address};


const emps2 = {employee,address};

//refer address memory
const emps = employee;
emps.firstName = "code id";

console.log();