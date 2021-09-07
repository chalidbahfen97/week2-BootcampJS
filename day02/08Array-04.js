const emp = ["andi","charlie","delta","gita","hari","zeni"];

function searchEmp(array,key){
    for (let i = 0; i < array.length; i++) {
        if (key === array[i] ) {
            return `Employee ${key} found di index ke-${i}`;
        } 
    }
    return `Employee ${key} not found`;
}
console.log(searchEmp(emp,"gita"));