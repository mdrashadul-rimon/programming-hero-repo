//parameter and multiple parameter learning

// addition
function addTwoNum(num1, num2){
    console.log(num1, num2);
    var total = num1 + num2;
    return "Result is " + num1 + num2+ ' '; 
    return total;
}
var firstNum = 22;
var secondNum = 33;

var result = addTwoNum(secondNum, firstNum);//function calling
console.log(result);

// subtraction
// function subTwoNum(num1, num2){
//     var sub = num1 - num2;
//     return sub;
// }
// var result = subTwoNum(10,5);
// console.log('Subtraction is:', result);

// // Multiplication
// function multiplyTwoNum(num1, num2){
//     var total = num1 * num2;
//     return total;
// }
// var mul = multiplyTwoNum(5,5);
// console.log('Multiplication:', mul);

// // Division
// function divTwoNum(num1, num2){
//     var div = num1 / num2;
//     console.log(div);
//     var remain = num1 % num2;
//     console.log(remain);
//     return div;
//     // return remain; not working.. remaining value send to the resultDiv. Don't know why.. I don't know how More operation can be done in one function.
// }
// var resultDiv = divTwoNum(25,5);
// // var resultRemain = resultDiv;
// console.log('Division is:', resultDiv);
// // console.log('Remaining:', resultRemain);