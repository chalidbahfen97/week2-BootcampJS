export default class Employee  {
    constructor(firstName,lastName,salary = 0,skill=[],status="Permanent",portofolio={ipk : 1}){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.skill = skill;
        this.status =status;
        this.portofolio = portofolio;
    }
    
    //create func di class employee
    toString(){
        return `${this.firstName} ${this.lastName} , salary = RP.${this.salary}`
    }

}

class contract extends Employee{
    constructor(firstName,lastName,salary = 0,skill=[],status="Permanent",portofolio={ipk : 1},xtraTime){
        super(firstName,lastName,salary,skill,status,portofolio);
        this.xtraTime = xtraTime;
    }
    toString(){
        return super.toString() +`, uang lembur = ${this.xtraTime}, total gaji = ${this.salary + this.xtraTime}`
    }
}

export {contract};

/*
const emp1 = new Employee("john","black",5000);
const emp2 = new Employee("arya","stark",4000,["java","oracle"],"kontrak",{ipk : 3.00});
const emp3 = new Employee("dian","kang",5000,["c#"]);

const listEmployee = [emp1,emp2,emp3];

console.log(emp1.toString());
console.log(emp2.toString());
console.log(emp3.toString());

console.log();
*/  