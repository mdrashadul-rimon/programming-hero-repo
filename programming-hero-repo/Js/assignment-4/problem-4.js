// Problem-4: oddFriend
function oddFriend(friendName) {
    let unique = '';
    //Error for parameter check
    if (typeof friendName == 'string' || typeof friendName == 'number' || typeof friendName != 'object') {
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
const friendName = ['kodu', 'rash', 'rimon', 'modu', 'rashadul', 'zuku', 'rakin'];
let output = oddFriend(friendName);
console.log(output);