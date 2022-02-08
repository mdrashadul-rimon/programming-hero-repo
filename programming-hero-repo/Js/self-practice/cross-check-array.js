// let a = [1, 2, 3, 4, 5];
// let b = [1, 10, 5];
// function crossCheck(a, b) {
//     for (let i of b) {
//         if (a.indexOf(i) != -1){
//             console.log('yes');
//         }
//         else{
//             console.log('No');
//         }
//     }
// }
// crossCheck(a,b);

// function compare(a, b) {
//     if (typeof a == b) { //typeof use na korle output true asbe
//       return true;
//     } else {
//       return false;
//     }
//   }
//   const result = compare(15, "15");
//   console.log(result);

// function compare(a, b) {
//     if (a.toString() === b) {
//      return true;
//     } else {
//      return false;
//     }
//    }
   
//    const result = compare(25, 25);
//    console.log(result);
//    console.log("123" + 123);

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}