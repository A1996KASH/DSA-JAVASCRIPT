class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class singlyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if(!this.head) {
            this.head =  newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    traverse() {
        let current = this.head
        if(!this.head){
            console.log('List is empty')
        }
        while(current) {
            console.log(current.val)
            current = current.next
        }
    }
    pop() {
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
      
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    shift() {
        let current = this.head
        if(!this.head) return undefined
        current = this.head.next
        this.head = current
        this.length--
    }
    unshift(val){
        let current = this.head
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            return newNode
        } else {
            newNode.next = current
            this.head = newNode
            this.length++
        }
    }
}
const list = new singlyLinkedList()
list.push(34)
list.push(341)
//list.shift()
list.unshift(3454)
list.traverse()
console.log(list)

