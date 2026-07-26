import type { TrieNode } from "./types.ts";


export class Trie {
    private isEnd: boolean;
    private children: Record<string, Trie>

    constructor(from?: TrieNode) {
        this.isEnd = false;
        this.children = {};
        if (from) {
            this.construct(from);
        }
    }

    search(str: string) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let node: Trie = this;

        for (const c of str) {
            if (!Object.prototype.hasOwnProperty.call(node.children, c)) {
                return null;
            }

            node = node.children[c];
        }

        return node;
    }

    getStrings(start?: string) {
        start ??= "";

        function rec(node: Trie, string: string[], strings: string[], prefix: string) {
            if (node.isEnd) {
                strings.push(prefix + string.join(""));
            }
            for (const c of Object.keys(node.children)) {
                string.push(c);
                rec(node.children[c], string, strings, prefix);
                string.pop();
            }
        }

        const node = this.search(start);

        const strings: string[] = [];
        rec(node || this, [], strings, node ? start : "");
        return strings;
    }

    private construct(from: TrieNode) {

        function copy(node: Trie, from: TrieNode) {
            node.isEnd = from.isEnd;
            node.children = {};

            for (const key of Object.keys(from.children)) {
                node.children[key] = new Trie();
                copy(node.children[key], from.children[key]);
            }
        }

        copy(this, from);
    }
}