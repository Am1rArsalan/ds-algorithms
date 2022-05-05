import { assert, test } from 'vitest';
import { TrieImpl } from './main';

test('test trie implementation', () => {
    const trie = new TrieImpl();

    trie.insert('apple');
    let result = trie.search('dog'); // false
    assert.equal(result, false);

    trie.insert('dog');
    trie.search('dog'); // true
    result = trie.search('dog');
    assert.equal(result, true);

    result = trie.startsWith('app'); // true
    assert.equal(result, true);

    result = trie.search('app'); // false;
    //assert.equal(result, false);

    trie.insert('app');
    result = trie.search('app'); // true
    //assert.equal(result, false);
});
