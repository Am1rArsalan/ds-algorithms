import { isValid } from './index';
import { describe, assert, it } from 'vitest';

describe('is valid ', () => {
    it('problem one', () => {
        assert.equal(isValid('{([])}'), true);
        assert.equal(isValid('{([]'), false);
        assert.equal(isValid('{[(])}'), false);
        assert.equal(isValid('{[]()}'), true);
    });
});
