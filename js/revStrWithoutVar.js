const revStrWithoutVar = (str)=>{
    const s = str.split('');
    const n = s.length;
    for(let i=0;i<Math.ceil(s.length/2);i++){
        [s[i], s[n-i-1]] = [[s[n-i-1]],[s[i]]];
    }
    return s.join('');
}

console.log(revStrWithoutVar("hellow"));