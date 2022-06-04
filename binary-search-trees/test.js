// import Node from "node";
const Node = require('./node');

const node = new Node(7);
node.insert(node, new Node(5));
node.insert(node, new Node(9));
node.insert(node, new Node(30));

node.print(node);
