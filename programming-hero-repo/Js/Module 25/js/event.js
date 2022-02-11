function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const blueButton = document.getElementById('make-blue-button');
// console.log(blueButton)
blueButton.onclick = makeBlue; //ekhane call korle vejal lagto screen load hoto protibar ei function a tai blue always thakto.. tai eivabe kaj korle function na diye sudhu function name dite hobe.

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

const greenButton = document.getElementById('make-green-button');
greenButton.onclick = makeGreen;
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// arekvabeo kora jai niche anonymous function diye
const pinkButton = document.getElementById('make-pink-button');
pinkButton.onclick = function () { //eivabe korake anonymous function bole;
    document.body.style.backgroundColor = 'hotpink';
}
// addEventListener use korbo event handle korar jonnno. etai basically event creation. onclick er bodole event kore kora jai.
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// addEventListener er arekta model
const cyanButton = document.getElementById('make-cyan');
cyanButton.addEventListener('click', function makeCyan() {
    document.body.style.backgroundColor = 'cyan';
})

//aro easy way to use addEventListener. kono variable lagbena abr alaa vabe function name o dite hbena, anonymous function diyei sob kam tamam
document.getElementById('make-lightBlue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightblue';
})