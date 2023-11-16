import Queue from "./queues";

class TreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

interface IBinaryTree<T> {
  insert(data: T): TreeNode<T>;
  convert(): TreeNode<T>;

  //   traversing algos
  inOrder(root: TreeNode<T> | null): T[];
  preOrder(root: TreeNode<T> | null): T[];
  postOrder(root: TreeNode<T> | null): T[];
  levelOrder(root: TreeNode<T> | null): T[];

  getHeight(root: TreeNode<T> | null): number;
}

class BinaryTree<T> implements IBinaryTree<T> {
  private elements: T[];
  private inorder: T[] = [];
  private preorder: T[] = [];
  private postorder: T[] = [];
  private levelorder: T[] = [];

  constructor() {
    this.elements = [];
  }

  public convert(): TreeNode<T> {
    if (this.elements.length == 1) {
      return new TreeNode(this.elements[0]);
    }

    const root = new TreeNode(this.elements[0]);
    const q = new Queue<TreeNode<T>>();
    q.enqueue(root);
    let index = 1;

    while (index < this.elements.length) {
      const node = q.front();
      q.dequeue();

      node!.left = new TreeNode(this.elements[index]);
      q.enqueue(node!.left);
      index++;

      if (index < this.elements.length) {
        node!.right = new TreeNode(this.elements[index]);
        q.enqueue(node!.right);
        index++;
      }
    }

    return root;
  }

  public insert(data: T): TreeNode<T> {
    this.elements.push(data);

    return this.convert();
  }

  public inOrder(root: TreeNode<T> | null): T[] {
    if (!root) {
      return this.inorder;
    }

    this.inOrder(root!.left);
    this.inorder.push(root!.data);
    this.inOrder(root!.right);

    return this.inorder;
  }

  public preOrder(root: TreeNode<T> | null): T[] {
    if (!root) {
      return this.preorder;
    }

    this.preorder.push(root.data);

    this.preOrder(root.left);
    this.preOrder(root.right);
    return this.preorder;
  }

  public postOrder(root: TreeNode<T> | null): T[] {
    if (!root) {
      return this.postorder;
    }

    this.postOrder(root.left);
    this.postOrder(root.right);
    this.postorder.push(root.data);
    return this.postorder;
  }

  public levelOrder(root: TreeNode<T> | null): T[] {
    if (!root) {
      return this.levelorder;
    }

    const q = new Queue<TreeNode<T>>();
    q.enqueue(root);

    while (!q.empty()) {
      const node = q.front();
      q.dequeue();
      this.levelorder.push(node!.data);

      if (node?.left) {
        q.enqueue(node.left);
      }
      if (node?.right) {
        q.enqueue(node.right);
      }
    }

    return this.levelorder;
  }

  public getHeight(root: TreeNode<T> | null): number {
    if (!root) {
      return 0;
    }

    let l = this.getHeight(root.left);
    let r = this.getHeight(root.right);

    return 1 + Math.max(l, r);
  }
}

const bt = new BinaryTree<number>();

var root = bt.insert(3);
root = bt.insert(7);
root = bt.insert(10);
root = bt.insert(12);
root = bt.insert(9);
root = bt.insert(4);

console.log("Preorder traversal :", bt.preOrder(root));
console.log("Inorder traversal :", bt.inOrder(root));
console.log("Postorder traversal :", bt.postOrder(root));
console.log("Level order traversal :", bt.levelOrder(root));

console.log("Height of the tree is :", bt.getHeight(root));
