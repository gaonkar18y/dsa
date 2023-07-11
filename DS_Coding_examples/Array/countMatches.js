var countMatches = function(items, ruleKey, ruleValue) {
    const rulesMap = {
        'type':0, 'color':1, 'name':2
    }
    let count=0;
    items.forEach(item=>{
        if (item[rulesMap[ruleKey]] === ruleValue) {
            count++;
        }
    }); 
    return count;
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver"));

console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone"));