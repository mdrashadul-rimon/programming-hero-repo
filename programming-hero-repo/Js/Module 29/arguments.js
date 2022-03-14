//arguments er vitor loop chalano.. sob somoi kaje lagena but exceptational case a lage.. ekhane abr push() kinba pop() kaje lagena mathai rakhte hobe

function addNumbers(num1, num2) {
    // console.log(arguments[2]); // eta holo array like object arguments eikhane index er moto dekhabe 2 no index
    let resultForLoop = 0;
    for (const num of arguments) { //arguments ei word ta auto kaj korbe arguments diye
        // console.log(num);
        resultForLoop += num;

    }
    // const result = num1 + num2;
    return resultForLoop;
}
const sum = addNumbers(23, 13, 22, 122, 233, 45);
console.log(sum);

// string niye kichu kaj kora jak
function getFullName(firstName, LastName) {
    let fullName = '';
    for (let part of arguments) {
        fullName = fullName + part + ' '; //evabe khub besi kaj kora valona.. strign jora dea kharap ovvas kintu boro hole beshi sikhba
    }
    // const fullName = firstName + ' ' + LastName; //agekar local niyom
    return fullName;
}
const name = getFullName('omuk', 'tomuk', 'habi', 'jabi');
console.log(name);