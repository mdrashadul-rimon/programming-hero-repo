// Problem-4: oddFriend
function oddFriend(friendName) {
    let unique = '';
    if (typeof friendName == 'string' || typeof friendName == 'number' || typeof friendName != 'object') {
        return 'Error!';
    }
    for (let i = 0; i < friendName.length; i++) {
        if (friendName[i].length % 2 == 1) {
            unique = friendName[i];
            break;
        }
    }
    return unique;
}
const friendName = ['kodu', 'joduu', 'modu', 'vadu', 'zuku', 'rakin'];
let k = oddFriend(friendName);
console.log(k);