const number = [1, 4, 23, 5, 22, 55];

var sum = 0;
for (let i = 0; i < number.length; i++) {
    
    var sum = sum + number[i];
    console.log(sum);
}
console.log(sum);

// using function

function sumArray(numbers){
    var sum=0;
    for(let i=0; i<numbers.length; i++){
        sum=sum+numbers[i];
    }
    return sum;
}
const total=sumArray(number);
console.log(total);