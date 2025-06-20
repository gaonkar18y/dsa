var fibGenerator = function*() {
    let x = 0;
    let y = 1;
    yield x;
    yield y;

    while(true) {
        let z = x+y;
        x = y;
        y = z;
        yield z;
    }

};


 const gen = fibGenerator();
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)


 