class BSTnode<T> {
  data: T;
  left: BSTnode<T> | null;
  right: BSTnode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = this.right = null;
  }
}

interface IBST<T> {
  // basic operations
  insertInBST(root: BSTnode<T> | null, value: T): BSTnode<T> | null;
  deleteFromBst(root: BSTnode<T> | null, value: T): BSTnode<T> | null;

  // traversal techniques
  inOrder(root: BSTnode<T> | null): T[];
  preOrder(root: BSTnode<T> | null): T[];
  postOrder(root: BSTnode<T> | null): T[];

  //   searching , true if present
  isPresent(root: BSTnode<T>, value: T): boolean;
}

class BST<T> implements IBST<T> {
  private inorder: T[] = [];
  private postorder: T[] = [];
  private preorder: T[] = [];

  // O(log n)
  public insertInBST(root: BSTnode<T> | null, value: T): BSTnode<T> | null {
    if (!root) {
      return new BSTnode(value);
    }

    //   find the position where it is to be inserted
    if (value > root.data) {
      root.right = this.insertInBST(root.right, value);
    } else if (value < root.data) {
      root.left = this.insertInBST(root.left, value);
    }

    return root;
  }

  public inOrder(root: BSTnode<T> | null): T[] {
    if (!root) {
      return this.inorder;
    }

    this.inOrder(root.left);
    this.inorder.push(root.data);
    this.inOrder(root.right);

    return this.inorder;
  }

  public preOrder(root: BSTnode<T> | null): T[] {
    if (!root) {
      return this.preorder;
    }

    this.preorder.push(root.data);

    this.preOrder(root.left);
    this.preOrder(root.right);

    return this.preorder;
  }

  public postOrder(root: BSTnode<T> | null): T[] {
    if (!root) {
      return this.postorder;
    }

    this.postOrder(root.left);
    this.postOrder(root.right);
    this.postorder.push(root.data);

    return this.postorder;
  }

  public isPresent(root: BSTnode<T> | null, value: T): boolean {
    if (!root) {
      return false;
    }

    if (root.data === value) {
      return true;
    }

    if (value > root.data) {
      return this.isPresent(root.right, value);
    }

    return this.isPresent(root.left, value);
  }

  private findInorderSuccessor(root: BSTnode<T>): BSTnode<T> {
    while (root.left) {
      root = root.left;
    }
    return root;
  }

  //   deletion is most complex as it has 3 edge cases
  // 1. the node to be deleted has no children
  // 2. the node to be deleted has one child
  // 3. the node to be deleted has 2 children
  public deleteFromBst(root: BSTnode<T> | null, value: T): BSTnode<T> | null {
    // resolves case 1
    if (!root) {
      return root;
    }

    // first we search for the value
    if (value > root.data) {
      root.right = this.deleteFromBst(root.right, value);
    } else if (value < root.data) {
      root.left = this.deleteFromBst(root.left, value);
    } else {
      // at this point we have found our node
      //   resolving case 2
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      //   resolving third case
      const minNode = this.findInorderSuccessor(root.right);
      root.data = minNode.data;
      root.right = this.deleteFromBst(root.right, root.data);
    }

    return root;
  }
}

const bst = new BST<number>();

var root = bst.insertInBST(null, 1);
root = bst.insertInBST(root, 2);
root = bst.insertInBST(root, 3);
root = bst.insertInBST(root, 4);
root = bst.insertInBST(root, 12);

console.log("Inorder traversal of bst :", bst.inOrder(root));
console.log("Preorder traversal of bst :", bst.preOrder(root));
console.log("Postorder traversal of bst :", bst.postOrder(root));
console.log(bst.isPresent(root, 4));

console.log("Tree after deletion : ", bst.inOrder(bst.deleteFromBst(root, 4)));
