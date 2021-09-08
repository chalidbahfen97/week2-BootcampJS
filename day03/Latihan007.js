const dates = [ new Date (2021,10,10), new Date (2019,3,12), new Date (2020,5,23), new Date (2022,3,18)];

function matchingDate(dates, year) {
    const searchYear = dates.find((date) => date.getFullYear() === year);
    return searchYear;
}
console.log(matchingDate(dates,2020));
console.log();