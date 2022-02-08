function smallestNumber(number) {
    let smallest = number[0];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

let ages = [21, 34, 22, 12, 45, 98];
let smallest = smallestNumber(ages);
console.log('Small is', smallest);