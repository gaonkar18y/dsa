function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    if(str1.length !== str2.length){
        return false;
    }
    
    let charMap = {};
    
    for(let i=0;i<str1.length;i++){
        if(charMap[str1[i]]){
            charMap[str1[i]]++;
        }else {
            charMap[str1[i]]=1;
        }
    }
    
    for(let i=0;i<str2.length;i++){
        if(charMap[str2[i]]){
            charMap[str2[i]]--;
        }else{
            return false;
        }
    }
    
    return true;
    
  }

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true