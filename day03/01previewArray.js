const foods = ["Sup","Pizza","Pasta"];

if (Array.isArray(foods)) {
    console.log(`${foods} is an array`);
}

for (let i = 0; i < foods.length; i++) {
    const food = foods[i];
    console.log(food);
}

//foreach hanya bisa dipanggil jika data berupa array, map, set
foods.forEach(food => console.log(food));