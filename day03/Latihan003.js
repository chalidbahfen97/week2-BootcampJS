let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang", "Bayam"];

fruits.push("Anggur","Banana","Sirsak"); //tambah anggur,banana dan sirsak

fruits.pop(); //hapus sirsak

let guava = fruits.indexOf("Jambu");
fruits.splice(guava,1);// hapus jambu

fruits.splice(2,3);// hapus semua kecuali jeruk, mangga, banana

fruits.splice(2,0,"Rambutan","Bangkuang"); // tambah rambutan dan bangkuang

fruits.splice(4,1,"Nangka"); //replace banana  dengan nangka

let vege = fruits.concat(sayur); //gabung buah dan sayur
let vege2 = vege.reverse(); //reverse vege

function switchIndex(arr, indexSayur, indexBuah) {
   const formIndexSayur = indexSayur[0] + indexSayur.slice(1).toLowerCase();
   const formIndexBuah = indexSayur[0] + indexSayur.slice(1).toLowerCase();

   const index1 = arr.indexOf(formIndexSayur);
   const index2 = arr.indexOf(formIndexBuah);

   vege.splice(index2,1,indexSayur);
   vege.splice(index1,indexBuah);

}
console.log(switchIndex(vege,"Tomat","Jeruk")); 
console.log();