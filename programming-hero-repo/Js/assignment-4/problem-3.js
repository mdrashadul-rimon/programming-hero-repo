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