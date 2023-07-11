class EventEmitter {
    constructor(){
        this.events = {};
    }
    subscribe(event, cb) {
      let index = 0;
      if(this.events[event]){
        index = this.events[event].length;
        this.events[event].push(cb);
      }else{
          this.events[event] = [cb]
      }
      return {
          unsubscribe: () => {
            this.events[event].splice(index,1);
          }
      };
    }
  
    emit(event, args = []) {
        const result = [];
        if(this.events[event]){
            for(let fn of this.events[event]){
                result.push(fn.apply(this, args));
            }
        }
        return result;
    }
  }
  

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);

console.log(emitter.emit('onClick')); // [99]
console.log(sub.unsubscribe()); // undefined
console.log(emitter.emit('onClick')); // []
