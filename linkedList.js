class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  prepend(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  append(data){
    const node = new Node(data);
    if(!this.head){
      this.head = node;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
        
      }
      current.next = node;
      this.size++;
    }
    
  }
  remove(index) {
    if (!this.head) {
      console.log("The node list is empty!");
      return;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = removeNode.next;
    } else {
      let prevNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        prevNode = prevNode.next;
      }
      removeNode = prevNode.next;
      prevNode.next = removeNode.next;
    }
    this.size--;
    return removeNode.data;
  }
  getIndex(data){
    if (!this.head) return 'The linked list is empty!';
    let current = this.head;
    let index = 0;
    while(current){
      if(current.data ===  data){
        return index;
      }else{
        current = current.next;
        index++;
      }
    }
    return 'Item not found!'
    
  }
  printList(){
    let current = this.head;
    while(current){
      console.log(current.data);
      current = current.next;
      
    }
    
  }
}

const linkedList = new LinkedList();
linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);
linkedList.append(40);
linkedList.printList();
