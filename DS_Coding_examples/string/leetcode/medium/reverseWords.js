var reverseWords = function(s) {
    let str = s.trim();
    let l = str.length;
    let reverse = "";
    let i=l-1;
    while(i>=0){
        let word = "";
        while(str[i] !== ' ' && i>=0){
            word = str[i] + word;
            i--;
        }
        reverse+=word;
        if(i === 0) return reverse;
        while(str[i] === ' '){
            i--;
        }
        reverse+=' ';
    }

    return reverse.trim();
};

//"the sky is blue"
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
