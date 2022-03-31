import { validateString } from './index';
import { describe, assert, it } from 'vitest';

describe('validate string ( problem 3 )', () => {
    it('validate string', () => {
        assert.equal(validateString(`a)bc(d)`), 'abc(d)');
        assert.equal(validateString(`(ab(c)d`), 'ab(c)d');
        assert.equal(validateString(`))((`), '');
    });
});
