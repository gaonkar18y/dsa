function reverseWords(sentence){
    const revWordsArr= [];

    let wordlength=0;
    for(let i=sentence.length-1; i>=0;i--){
        if(sentence.charAt(i) === ' ' || i===0){
            const startIndex = i===0 ? 0 : i+1;
            const word = sentence.substr(startIndex, wordlength+1);
            revWordsArr.push(word.trim());
            wordlength=0;
        } else {
            wordlength++;
        }
    }
    console.log(revWordsArr)
    return revWordsArr.join(' ');
}

console.log(reverseWords("this is TEMP test"));