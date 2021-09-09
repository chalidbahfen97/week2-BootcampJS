const employee = {
    firstName : "John",
    lastName : "Black",
    salary : 5000,
    portofolio : {
        ipk : 3.45,
        skill : ["java","oracle","nodejs"] 
    }
}

const programmer = {...employee};
programmer.skill[1] = "postgres";

console.log();