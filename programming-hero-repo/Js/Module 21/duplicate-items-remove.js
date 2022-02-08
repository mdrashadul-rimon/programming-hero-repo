const names = ['juthi', 'jannat', 'ferdause', 'juthi', 'rimon', 'juthi', 'rimon', 'jannatul', 'jannat', 'rashadul', 'rimon'];

function removeDuplicate(names) {
    let unique = [];
    for (const element of names) {
        // console.log(element);
        if (unique.indexOf(element) == -1){
            unique.push(element);
            console.log(element);
        }
    }
    return unique;
}
let uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
