function fact(i){
    if (i==1){
        return 1;
    }
    return i * fact(--i);
}
console.log(fact(5));
