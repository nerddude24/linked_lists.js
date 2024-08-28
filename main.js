import { LinkedList } from "./linked-list.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.at(1)); // cat
console.log(list.removeAt(0)); // dog
console.log(list.contains("hamster")); // true
list.prepend("shotgun");
console.log(list.toString());
console.log(list.removeAt(3)); // hamster
console.log(list.removeAt(3)); // snake
console.log(list.removeAt(3)); // turtle
console.log(list.toString());
