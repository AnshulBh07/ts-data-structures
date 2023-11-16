"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queues_1 = __importDefault(require("./queues"));
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.inorder = [];
        this.preorder = [];
        this.postorder = [];
        this.levelorder = [];
        this.elements = [];
    }
    convert() {
        if (this.elements.length == 1) {
            return new TreeNode(this.elements[0]);
        }
        const root = new TreeNode(this.elements[0]);
        const q = new queues_1.default();
        q.enqueue(root);
        let index = 1;
        while (index < this.elements.length) {
            const node = q.front();
            q.dequeue();
            node.left = new TreeNode(this.elements[index]);
            q.enqueue(node.left);
            index++;
            if (index < this.elements.length) {
                node.right = new TreeNode(this.elements[index]);
                q.enqueue(node.right);
                index++;
            }
        }
        return root;
    }
    insert(data) {
        this.elements.push(data);
        return this.convert();
    }
    inOrder(root) {
        if (!root) {
            return this.inorder;
        }
        this.inOrder(root.left);
        this.inorder.push(root.data);
        this.inOrder(root.right);
        return this.inorder;
    }
    preOrder(root) {
        if (!root) {
            return this.preorder;
        }
        this.preorder.push(root.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
        return this.preorder;
    }
    postOrder(root) {
        if (!root) {
            return this.postorder;
        }
        this.postOrder(root.left);
        this.postOrder(root.right);
        this.postorder.push(root.data);
        return this.postorder;
    }
    levelOrder(root) {
        if (!root) {
            return this.levelorder;
        }
        const q = new queues_1.default();
        q.enqueue(root);
        while (!q.empty()) {
            const node = q.front();
            q.dequeue();
            this.levelorder.push(node.data);
            if (node === null || node === void 0 ? void 0 : node.left) {
                q.enqueue(node.left);
            }
            if (node === null || node === void 0 ? void 0 : node.right) {
                q.enqueue(node.right);
            }
        }
        return this.levelorder;
    }
    getHeight(root) {
        if (!root) {
            return 0;
        }
        let l = this.getHeight(root.left);
        let r = this.getHeight(root.right);
        return 1 + Math.max(l, r);
    }
}
const bt = new BinaryTree();
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
