const myNum = -5;
const output1 = Math.abs(myNum);// abs dile negative value keo positive output dibe
console.log(output1);

let num1 = 9.99;
let output2 = Math.floor(num1); // floor dile sudhu 9 output dibe mane round figure kore dai.. mane vangti tuku bad diye dibe.. 
console.log(output2);

let output3 = Math.round(num1); //round dileo setake round figure kore dibe.. tobe se khetre sob somoi nicher dikei round korbe amn ta na .50 ba tar upore hole uporer dike round korbe r .49 porjonto nicher dike round figure kore dibe..
console.log(output3);

for (var i = 1; i <= 6; i++) {
    let output4 = Math.round(Math.random() * 6); //random use korle joto no. er sathe asterik sign dea hobe setar upore random man asbe. ekhane round er vitore use korechi jeno kono fraction man na ase
    console.log(output4);
}
