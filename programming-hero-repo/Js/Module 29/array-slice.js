const numbers = [3, 6, 4, 5, 2, 5, 6, 10, 39, 59, 33, 44, 120];
const numberSliced = numbers.slice(4, 9);
//koto theke koto porjonto katbo ba slice kore felbo setar index no holo (4, 9)
console.log(numberSliced);
console.log(numbers);
//slice korle array kintu change hobena. so eta plus point various kaj korar jonno onno function a

//slice er kachakachi arekta function ache splice()
const numberSpliced = numbers.splice(4, 3); 
// eta delete kore dibe .. ager ta korsilo hoilo slice kore kete oitukui dekhato r eta jei index dibo toto theke suru korbe r tar pore joto number dibo totogula idem delete kore dibe. mane holo splice(4, 3) dile 4 no. index theke suru korbe diye 4 index theke 3 ta item k delete kore dibe and array teo pore r sei item paoa jabena.
console.log(numberSpliced);
console.log(numbers);

//splice(4, 3, eikhane aro kichu add kora jabe delete kora jaiga te) mane paramenter hisebe aro kichu add korle oi delete hoa faka jaiga gulo te notun element add hoye jabe..kichu delete na korte chaile 3 er jaigai 0 dite hobe just bakita inject kore dea jabe.. uncomment kore dekho
// const numberSpliced2 =  numbers.splice(4,3, 99,77);
// console.log(numberSpliced2);
// console.log(numbers);