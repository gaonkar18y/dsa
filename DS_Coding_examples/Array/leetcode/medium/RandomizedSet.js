/*
var RandomizedSet = function() {
    this.items = {};
};


RandomizedSet.prototype.insert = function(val) {
    if(this.items[val]){
        return false;
    }
    this.items[val]=true;
    return true;
};


RandomizedSet.prototype.remove = function(val) {
    if(this.items[val]){
        delete this.items[val];
        return true;
    }
    return false;
};


RandomizedSet.prototype.getRandom = function() {
    const keys = Object.keys(this.items);
    const l = keys.length;
    const randomKeyIndex = parseInt(Math.random()*l);
    return parseInt(keys[randomKeyIndex]);
};
*/


var RandomizedSet = function() {
    this.items = [];
    this.indexes = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.indexes[val] !== undefined){
        return false;
    }
    this.indexes[val]=this.items.length;
    this.items.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.indexes[val] !== undefined){
        const i = this.indexes[val];
        const j = this.items.length-1;
        if(i !== j){
            [this.items[i],this.items[j]] = [this.items[j],this.items[i]];
            this.indexes[this.items[i]] = i;
        }
        this.items.pop();
        delete this.indexes[val];
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomKeyIndex = parseInt(Math.random()*this.items.length);
    return this.items[randomKeyIndex];
};

let randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(0)); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(randomizedSet.insert(1)); // Returns false as 2 does not exist in the set.
console.log(randomizedSet.remove(0)); // Inserts 2 to the set, returns true. Set now contains [1,2].
//console.log(randomizedSet.getRandom()); // getRandom() should return either 1 or 2 randomly.
console.log(randomizedSet.insert(2)); // Removes 1 from the set, returns true. Set now contains [2].
console.log(randomizedSet.insert(3));
console.log(randomizedSet);
console.log(randomizedSet.remove(1)); // 2 was already in the set, so return false.

console.log(randomizedSet);
console.log(randomizedSet.getRandom()); // Since 2 is the only number in the set, getRandom() will always return 2.
