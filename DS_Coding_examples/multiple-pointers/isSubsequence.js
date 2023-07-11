function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let i=0;
    let j=0;

    while(i<str1.length && j < str2.length){
        let c = str1[i];
        while(j<str2.length && str2[j]!==c) j++;
        i++;
        j++;
    }

    return i=== str1.length;
  }

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abcd', 'abracadabrad')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)