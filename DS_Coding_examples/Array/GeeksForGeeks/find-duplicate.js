
function duplicates(a, n){
    //your code here
    a = a.sort((x,y)=> x -y);
    const result = [];
    for(let i=0;i<n;){
        const num = a[i];
        if(num === a[i+1]){
            result.push(num);
            while(a[i]===num) i++;
        }else{
            i++;
        }
    }
    return result;
}


console.log(duplicates([13,9,25,1,1,0,22,13,22,20,3,8,11,25,10,3,15,11,19,20,2,4,25,14,23,14],26));
//console.log(duplicates([2,3,1,2,3],5));