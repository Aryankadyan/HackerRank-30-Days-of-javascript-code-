function Solution(){
   let stack = [];
   let queue = [];
   
   this.pushCharacter = (char) => stack.push(char);
   this.enqueueCharacter = (char) => queue.unshift(char);
   this.popCharacter = () => stack.pop();
   this.dequeueCharacter = () => queue.pop();
}
