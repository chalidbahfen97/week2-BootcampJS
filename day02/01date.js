//declaration date
const today = new Date();
console.log(today.getDay());
console.log(today.getMonth()); // dimulai dari 0
console.log(today.getFullYear());

//get info time
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

console.log(`Jam ${hours}:${minutes}:${seconds}`);

//declaration date with arguments
const tomorrow = new Date(2021,8,8);
console.log(tomorrow);

//declaration date with time
const eventDate = new Date ("2021-08-12T03:12:00Z")
console.log(eventDate);

//adding date
const now = new Date();
const currentDate = now.getDate();
now.setDate(now.getDate()+3);

console.log(`booking date : ${now}`);

// date time format indonesia
console.log(`Format Date : ${new Intl.DateTimeFormat('id-ID').format(now)}`);

//compare date
const startDate = new Date(2021,8,7);
const endDate = new Date(2021,8,10);
const selisihDate = endDate - startDate;

console.log(`selisih date = ${selisihDate}`);

if(endDate > startDate){
    console.log(`${endDate} > ${startDate}`);
}

const miliSecond = 1000 * 60 * 60 * 24;

let countDay = selisihDate/miliSecond;

console.log(countDay);