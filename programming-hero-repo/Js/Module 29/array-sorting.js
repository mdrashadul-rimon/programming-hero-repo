let numbersArr = [3, 6, 4, 5, 2, 5, 6, 10, 1, 9, 9, 3, 4, 2];
let sortedNumbers = numbersArr.sort(); //evabe dile age 1 asbe tarpor 10.. but hoar kotha chilo 1 2 3 4 evabe but javascript a sort() diye oivabe kaj korena kenona unicode diye check kore tai akta comparison bosano lage niche dekho
console.log(sortedNumbers);

let bigNumbers = [66, 23, 13, 5, 2, 1, 7, 8, 5, 3, 6, 11];
let sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);