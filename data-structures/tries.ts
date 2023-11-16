class TrieNode<T> {
  children: (TrieNode<T> | null)[] = [];
  isEndOfWord: boolean;

  constructor() {
    this.isEndOfWord = false;
    // assign null for each index which represents an english letter
    for (var i = 0; i < 26; i++) {
      this.children.push(null);
    }
  }
}

interface ITrie<T> {
  insert(root: TrieNode<T> | null, word: T): void;
  search(root: TrieNode<T> | null, word: T): boolean;
  startsWith(root: TrieNode<T> | null, word: T): boolean;
}

class Trie<T> implements ITrie<T> {
  public insert(root: TrieNode<T> | null, word: T): void {
    const temp = root;

    let str = String(word);

    for(var i=0;i<str.length;i++){
        let index = str[i]-;
    }
  }

  public search(root: TrieNode<T> | null, word: T): boolean {}

  public startsWith(root: TrieNode<T> | null, word: T): boolean {}
}
