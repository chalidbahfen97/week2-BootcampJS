function strToDate(stringDate) {
    if (isNaN(stringDate)) {
        let newDate = Date.toString(stringDate);
        return (newDate);
    }


}
console.log(strToDate('12/30/2021'));