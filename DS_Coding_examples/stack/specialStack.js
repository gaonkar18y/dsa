class SpecialStack {
    constructor(size){
      this.size = size;
      this.items = [];
    }
  /** 
   * @param {number} x
   * @return {void}
   */
    push(x){
      this.items.push(x);
    }
  /**
   * @return {number}
   */
    pop(){
     return this.items.pop();
    }
  
  /**
   * @return {boolean}
   */
  
    isFull(){
      return this.items.length === this.size;
    }
  /**
   * @return {boolean}
   */
    isEmpty(){
     return this.items.length === 0;
    }
  /**
   * @return {number}
   */
    getMin(){
        let result = Infinity;
        const tempStack = new SpecialStack(this.size);
        while(!this.isEmpty()){
            let t = this.pop();
            if(t<result){
                result = t;
            }
            tempStack.push(t);
        }
        
        while(!tempStack.isEmpty()){
           this.push(tempStack.pop());
        }
        
        return result;
    }
  }