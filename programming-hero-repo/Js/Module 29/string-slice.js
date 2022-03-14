const anthem = 'Amar Sonar Bangla Ami Tmai Valobashi';
// split
const words = anthem.split(' ');
console.log(words);
const withoutA = anthem.split('a');
console.log(withoutA);
// slice
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice);
// substr
const anotherPart = anthem.substr(11, 15);
console.log(anotherPart);

//substring
const anotherPart2 = anthem.substring(11, 15);
console.log(anotherPart2);

//concat
const first = 'Amader';
const second = 'city';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('RJ kibria');
console.log(fullString);

//join
const words2 = ['a', 'b', 'c', 'd'];
// const allJoined = words2.join();
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
const allJoined = words2.join(', ');
console.log(allJoined);