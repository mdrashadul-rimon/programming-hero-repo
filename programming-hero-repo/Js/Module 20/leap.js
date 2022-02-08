// function leapYear(year) {
//     var year = 2022 ;
//     if (year / 400 == 0) {
//         console.log('leap year');
//     }
//     else if (year / 100 != 0) {
//         console.log('leap year');
//     }
//     else if (year / 4 == 0){
//         console.log('leap year');
//     }
//     else{
//         console.log('Not leap year');
//     }
//     return year;
// }
// leapYear();


function leapYear(year)
{
    var year = 1700;
  if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
      console.log('Leap');
  }
  else{
      console.log('not leap');
  }
  return year;
}
leapYear();
// var total=leapYear(1700);
// const number = -78; 
// const answer = Math.abs(number); 
// console.log(answer);