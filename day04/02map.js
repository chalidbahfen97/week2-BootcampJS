// map : menyimpan unique pair
const carts = new Map();

//add
carts.set(1,"Indomie");
carts.set(2,"Kripik");
carts.set(3,"HP");

//delete
carts.delete(3);

//display size
console.log(carts.size);


//display key & value
for (const [key,value] of carts) {
    console.log(key + " " + value);
}