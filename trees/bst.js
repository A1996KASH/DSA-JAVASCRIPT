class Node {
    constructor(val) {
        this.value = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(val) {
       this.root = this.insertRec(this.root, val)
    }
         // check if it has left and right child use recurssion
    insertRec(root, val){
        if(!root) {
           root = new Node(val)
            return root
        } else {
            if(val < root.value) {
                root.left = this.insertRec(root.left, val)
            } else if( val > root.value) {
                root.right = this.insertRec(root.right, val)
            }
            return root
        }
    }
    insertWithOutRec(val) {
        if(!this.root) {
            this.root = new Node(val)
            return this
    } 
        let currentNode = this.root
        while(true) {
            if(currentNode.value < val) {
                if(currentNode.right === null) {
                    currentNode.right = new Node(val)
                    return this
                } else {
                    currentNode = currentNode.right
                }
            } else if(currentNode.value > val) {
                if(currentNode.left === null) {
                    currentNode.left = new Node(val)
                    return this
                } else {
                    currentNode = currentNode.left
                }

            }
        }
    }
}

const node = new Node(45)

const tree = new BinarySearchTree()
tree.insert(45)
tree.insert(80)
tree.insert(100)
tree.insertWithOutRec(56)
console.log(tree)

