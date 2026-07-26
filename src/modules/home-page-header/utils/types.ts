export type TrieNode = {
    isEnd: boolean,
    children: Record<string, TrieNode>
}