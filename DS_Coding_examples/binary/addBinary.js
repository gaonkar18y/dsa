var addBinary = function(a, b) {
    const x= BigInt(`0b${a}`);
    const y= BigInt(`0b${b}`);
    return (x+y).toString(2);
  };