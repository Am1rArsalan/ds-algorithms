import { validateString } from './index';
import { describe, assert, it } from 'vitest';

describe('validate string ( problem 3 )', () => {
    it.skip('problem three', () => {
        assert.equal(validateString(`a)bc(d)`), 'abcd');
        assert.equal(validateString(`(ab(c)d`), 'abcd');
        assert.equal(validateString(`))((`), '');
    });
});
