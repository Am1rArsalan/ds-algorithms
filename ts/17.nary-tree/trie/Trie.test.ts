import { assert, test } from 'vitest';
import { TrieImpl } from './TrieImpl';

test('test trie implementation', () => {
    const trie = new TrieImpl();

    trie.insert('apple');
    let result = trie.search('dog');
    assert.equal(result, false);

    trie.insert('dog');
    trie.search('dog');
    result = trie.search('dog');
    assert.equal(result, true);

    result = trie.startsWith('app');
    assert.equal(result, true);

    result = trie.search('app');
    assert.equal(result, false);

    trie.insert('app');
    result = trie.search('app');
    assert.equal(result, true);
});
