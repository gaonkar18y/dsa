function reverse(str) {
    
    if(str.length<=1){
        return str;
    }

    return str[str.length-1]+reverse(str.substr(0, str.length-1));
}

console.log(reverse("abc"));

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'