this.insert=function(head,data){
    let node = new Node(data)
    let current = head
    
    if(!head){
        return node
    }else{
    while(current.next){
        current = current.next;
    }
    
    current.next = node;
    }
    return head;
}