# Binary search trees


## Insertion

![BST-Insert](http://i.stack.imgur.com/3NG0e.gif)

---

## Deletion

![BST-Delete](https://i.stack.imgur.com/TTM4d.png)

There are three cases to be considered while deleting a node.

- Case 1: Node to be deleted is the leaf node.(Node with value 22).

- Case 2: Node to be deleted has one child.(Node with value 26).

- Case 3: Node to be deleted has both children.(Node with value 49).

**Explanation of cases**

1. When the node to be deleted is a leaf node then simply delete the node and pass `null` to its parent node.

2. When a node to be deleted is having only one child then copy the child value to the node value and delete
the child **(Converted to case 1)**

3.  When a node to be delete is having two childs then the minimum from its right sub tree can be copied to the
node and then the minimum value can be deleted from the node's right subtree **(Converted to Case 2)**

