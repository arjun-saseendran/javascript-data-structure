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
