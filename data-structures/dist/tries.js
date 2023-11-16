"use strict";
class TrieNode {
    constructor() {
        this.children = [];
        this.isEndOfWord = false;
        // assign null for each index which represents an english letter
        for (var i = 0; i < 26; i++) {
            this.children.push(null);
        }
    }
}
