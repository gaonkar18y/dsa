
function* createInc(num){
    while(true){
        yield num++;
    }
}

const inc10 = createInc(10);

console.log(inc10.next().value);
console.log(inc10.next().value);