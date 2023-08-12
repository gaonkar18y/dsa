class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value){
           // only accept numbers....watch out since NaN is typeof number!
      if (typeof value === 'number' && !isNaN(value)) {
          // if there is nothing in the tree, start it off with a new node!
          if (this.root === null ) {
              this.root = new Node(value);
              return this;
          } 
          else {
              // current variable used for traversal, just like linked lists!
              var current = this.root;
              // keep looping till we get to the correct spot;
              while (true) {
                  if (value < current.value) {
                      // if there is nothing on the left
                      if (current.left === null ) {
                          // make a new node and get out
                          current.left = new Node(value);
                          return this;
                      }
                      // otherwise, keep moving on!
                       
                      else {
                          current = current.left;
                      }
                  } 
                  else if (value > current.value) {
                      // if there is nothing on the right
                      if (current.right === null ) {
                          // make a new node and get out
                          current.right = new Node(value);
                          return this;
                      } else {
                          current = current.right;
                      }
                  }
                  // otherwise it must be a duplicate so let's get out of here
                   
                  else {
                      return "duplicate!";
                  }
              }
          }
      } 
      else
          return "Please insert a number";
    }
        findSecondLargest() {
            if(!this.root) return undefined;

            let node = this.root;
            let parent = null;

            while(node.right){
                parent = node;
                node = node.right;
            }

            if(!parent){
                if(node.left){
                    return node.left.value;
                }else return undefined;
            }
            return parent.value;
      }

      findSecondMin(){
        if(!this.root) return undefined;

        const values = [];
        let node = this.root;
        values.push(node.value);

        while(node.left){
            node = node.left;
            if(values[0]!== node.value){
                values.unshift(node.value);
                if(values.length>2){
                    values.pop();
                }
            }
        }

        if(values.length < 2 && this.root.right){
            let node = this.root.right;
            values.push(node.value);
            while( values.length<2 && node.right){
                node = node.right;
                if(values[values.length-1]!== node.value){
                    values.push(node.value);
                }
            }

       }

       if(values.length === 2){
            return values[1];
       }else return undefined;

      }
  }


  const tree = new BinarySearchTree();
  tree.insert(5);
  tree.insert(3);
  tree.insert(6);
  tree.insert(7);
  tree.insert(2);
  tree.insert(4);
  tree.insert(1);

  console.log(tree.findSecondLargest())
  console.log(tree.findSecondMin());