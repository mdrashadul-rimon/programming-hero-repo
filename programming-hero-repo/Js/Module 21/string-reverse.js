let greetings = 'Hi baby, how are you?';
function reverseString(text) {
    let reverse = '';
    for (const char of text) {
        console.log(char);
        reverse = reverse + text;
    }
}
const reversed = reverseString(greetings);
// console.log(reversed);