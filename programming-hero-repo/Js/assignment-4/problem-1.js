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