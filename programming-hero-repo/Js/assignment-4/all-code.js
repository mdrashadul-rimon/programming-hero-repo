// Problem-1 anaToVori
function anaToVori(ana) {
    //Error Message
    if (typeof ana != 'number' || ana < 0) {
        return 'Error! Give Valid Number.';
    }
    // 1 vori is equal to 16 Ana
    let vori = ana / 16;
    return vori;
}
let anaIs = anaToVori(48);
console.log(anaIs);

// Problem-2: pandaCost
function pandaCost(singara, somucha, jilapi) {
    //Error Message
    if ((typeof singara != 'number' || singara < 0) || (typeof somucha != 'number' || somucha < 0) || (typeof jilapi != 'number' || jilapi < 0)) {
        return 'Error! Give all positive numbers only.';
    }
    let total = (singara * 7) + (somucha * 10) + (jilapi * 15);//calculate regarding given conditions
    return total;
}
let costIs = pandaCost(5, 2, 11); //call the function and send the value to parameter
console.log(costIs); //output optional

// Problem-3: picnicBudget

function picnicBudget(person) {
    let budget;
    //Error Message
    if (typeof person != 'number' || person < 0) {
        return 'Error! Give the number of persons only.';
    }
    //Over 200 person
    else if (person > 200) {
        let first100Person = 100 * 5000;
        let second100Person = 100 * 4000;
        let remainingPerson = (person - 200) * 3000;
        budget = first100Person + second100Person + remainingPerson;
    }
    //Between 100 to 200 person
    else if (person > 100) {
        let first100Person = 100 * 5000;
        let remainingPerson = (person - 100) * 4000;
        budget = first100Person + remainingPerson;
    }
    // Less than 100 person
    else if (person <= 100) {
        budget = person * 5000;
    }
    return budget;
}
let finalBudget = picnicBudget(230); //Call the function and send values in parameter
console.log(finalBudget);//optional output

// Problem-4: oddFriend
function oddFriend(friendName) {
    let unique = '';
    //Error for parameter check
    if (typeof friendName == 'string' || typeof friendName == 'number' || typeof friendName != 'object' || typeof friendName == 'symbol') {
        return 'Error! Give object array Only';
    }
    //Error for check an array if a number inside a string
    for (let i = 0; i < friendName.length; i++) {
        if (typeof friendName[i] != 'string' || friendName[i] == parseInt(friendName[i])) {
            return 'Error! Give character string in array Only';
        }
    }
    //check the first odd number of string and break
    for (let j = 0; j < friendName.length; j++) {
        if (friendName[j].length % 2 == 1) {
            unique = friendName[j];
            break;
        }
    }
    return unique;
}
const friendName = ['kodu', 'rashadulrimon', 'rimon', 'modu', 'rashadul', 'zuku', 'rakin'];
let output = oddFriend(friendName);
console.log(output);