var mostWordsFound = function(sentences) {
    var max=0;
    let currLength=0;
    sentences.forEach(s=>{
        currLength=s.split(' ').length;
        if(currLength>max){
            max=currLength;
        } 
    })

    return max;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));