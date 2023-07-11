function Add(x, y) {
    // Iterate till there is no carry  
    while (y != 0)
    {
        // carry now contains common 
        //set bits of x and y
        let carry = x & y;  
        console.log('carry',carry)
        // Sum of bits of x and y where at 
        //least one of the bits is not set
        x = x ^ y; 
        console.log('x',x)
        // Carry is shifted by one so that adding
        // it to x gives the required sum
        y = carry << 1;
        console.log('y',y)
    }
    return x;
}


console.log(Add(1454, 32));
