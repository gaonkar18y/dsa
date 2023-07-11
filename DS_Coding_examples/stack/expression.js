
class Stack {
    items;
    lastItem;
    constructor(){
        this.items = [];
        this.lastItem = null;
    }

    push(item){
        this.items.push(item);
        this.lastItem = item;
    }

    pop(){
        this.items.pop();
        this.lastItem = this.items[this.items.length-1];
    }

    getSize(){
        return this.items.length;
    }

    getItemOnTop(){
        return this.lastItem;
    }

}

const charMap = {
    '{': '}',
    '(': ')'
}

function isValidExp(strExp){
    const stack = new Stack();
    for(let i=0;i<strExp.length;i++){
        const c = strExp.charAt(i);
        const stackTop = stack.getItemOnTop();
   
        if(!stackTop || charMap[stackTop] !== c) {
            stack.push(c);
            continue;
        }

        stack.pop()
    }
   
    return stack.getSize() === 0;
}

const charMap2 = {
    '}': '{',
    ')': '(',
    ']': '['
}


var isValid = function(s) {
    const stack=[];
    for(let i=0;i<s.length;i++){
        const expectedTop = charMap2[s[i]];
        if(stack.length && stack[stack.length-1] === expectedTop){
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    }
    
    return stack.length === 0;
};

console.log(isValid("{}"));
console.log(isValid("{{"));
console.log(isValid("{{}}"));
console.log(isValid("{()}"));