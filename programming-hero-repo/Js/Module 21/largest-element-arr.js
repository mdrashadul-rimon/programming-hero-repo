function largestElement(number) {
    let largest = number[0];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if(element>largest){
            largest=element;
        }
        // console.log(element);
    }
    return largest;
}

let ages = [22, 23, 43, 11, 54, 43];
let oldest = largestElement(ages);
console.log('Large number',oldest);