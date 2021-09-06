//Uang Rp 115.000 pecah ke 50rb, 20rb, 10rb, 5rb

const money = 115000;
let limaPuluhRibu, duaPuluhRibu, sepuluhRibu, limaRibu, sisa;

limaPuluhRibu = parseInt(money/50000);
sisa = money % 50000;

duaPuluhRibu = parseInt(sisa/20000);
sisa = sisa % 20000;

sepuluhRibu = parseInt(sisa/10000);
sisa = money % 10000;

limaRibu = parseInt(sisa/5000);
sisa = sisa % 5000;

console.log(`Rp 50rb = ${limaPuluhRibu} lembar
Rp 20rb = ${duaPuluhRibu} lembar
Rp 10rb = ${sepuluhRibu} lembar
Rp 5rb = ${limaRibu} lembar
`);
console.log();