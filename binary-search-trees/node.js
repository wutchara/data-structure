class Node {
    _lChild;
    _rChild;
    data;

    constructor(data) {
        this._lChild = null;
        this._rChild = null;
        this.data = data;
    }

    print(root) {
        if (!root) {
            return;
        }

        this.print(root._lChild);
        console.log(root.data);
        this.print(root._rChild);
    }

    insert(root, newNode) {
        if (!root) {
            root = newNode;
        } else {
            if (root.data > newNode.data) {
                if (!root._lChild) {
                    root._lChild = newNode;
                } else {
                    this.insert(root._lChild, newNode);
                }
            } else {
                if (!root._rChild) {
                    root._rChild = newNode;
                } else {
                    this.insert(root._rChild, newNode);
                }
            }
        }
    }
}

module.exports = Node;