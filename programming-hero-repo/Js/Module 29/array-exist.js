function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'Lion', 'shamol', 'sabbir', 'rashadul'];
const myBigBuddy = megaFriend(friends);// evabe to asche akhn jodi keu parameter hisebe number diye dai tokhn error dekhabe. eita theke ber hote hole isArray() function use korbo. abr array check korar jonno directly boro hater A diye Array likhe .isArray() mane upore dekhen kaj korchi kina..
const myBigBuddy2 = megaFriend(123432);
console.log(myBigBuddy);
console.log(myBigBuddy2);

//array te kichu ache kina check kora
if (friends.indexOf('Lion') != -1){
    console.log('ache');
}
// includes diyeo kora jai
if(friends.includes('Lion')){
    console.log('ache');
}