function sum(i){
    console.log(i);
    if(i==1){
        // console.log(i);
        return 1;
    }
    return i+sum(--i)
}
console.log(sum(5));