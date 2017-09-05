class Node {
    constructor(value = null, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }

    insert(value){
        if(this.value == null){
            this.value = value;
        }else{
            if(this.value > value){
              if(this.left == null){
                  this.left = new Node(value);
              } else{
                  this.left.insert(value);
              }
            }else{
                if(this.right == null){
                    this.right = new Node(value);
                }else{
                    this.right.insert(value);
                }
            }
        }
    }

}



let root = new Node(6);
root.insert(8);
root.insert(5);
root.insert(7);

console.log(root);