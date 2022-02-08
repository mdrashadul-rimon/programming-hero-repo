// // Problem-2: pandaCost
// function pandaCost(singara, somucha, jilapi) {
//     //Error Message
//     if ((typeof singara != 'number' || singara < 0) || (typeof somucha != 'number' || somucha < 0) || (typeof jilapi != 'number' || jilapi < 0)) {
//         return 'Error! Give all positive numbers only.';
//     }
//     let total = (singara * 7) + (somucha * 10) + (jilapi * 15);//calculate regarding given conditions
//     return total;
// }
// let costIs = pandaCost(5, 2, 11); //call the function and send the value to parameter
// console.log(costIs); //output optional


//pandaCost
function pandaCost(singara, somucha, gilapi) {
    let total;
    if ((typeof singara != 'number' || singara < 0) || (typeof somucha != 'number' || somucha < 0) || (typeof gilapi != 'number' || gilapi < 0)) {
        return 'error give positive number';
    }
    total = (singara * 7) + (somucha * 10) + (gilapi * 15);
    return total;
}
let cost = pandaCost(5, 6, 2);
console.log(cost);