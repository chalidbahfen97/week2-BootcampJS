//sorting array number
const array = [34,2,3,54,223,65];
const sortNumber = array.sort((a,b) => a -b);
console.log();

//sorting array string
const foods = ["sup","pizza","pasta","bakso","chiki"];
const sortFoods = foods.sort(); //asc
const descFoods = foods.reverse(); //desc
const sortfood2 = foods.sort((a,b) => a > b ? 1 : -1); //asc
const sortfood3 = foods.sort((a,b) => a > b ? -1 : 1); //desc
console.log();