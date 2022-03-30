import { isValid, isValidTags, validateString } from './index';
import { describe, assert, it } from 'vitest';

describe('stack and queue problems', () => {
    it('problem one', () => {
        assert.equal(isValid('{([])}'), true);
        assert.equal(isValid('{([]'), false);
        assert.equal(isValid('{[(])}'), false);
        assert.equal(isValid('{[]()}'), true);
    });

    it.skip('problem two', () => {
        assert.equal(isValidTags(`<div>amir is here</div>`), true);
        assert.equal(
            isValidTags(
                `<div><p>p content </p><a> <span> link </span></a></div>`
            ),
            true
        );

        assert.equal(
            isValidTags(
                `<div><b><p>p content </p><a> <span> link </span></a></b></div>`
            ),
            true
        );

        assert.equal(
            isValidTags(`<section> 
          <p> <span> link </span></p>
          <div>
            <p>p content </p>
          <a> <span> link </span></a>
          <div>content</div>
          </section>`),
            false
        );
    });

    it.skip('problem three', () => {
        assert.equal(validateString(`a)bc(d)`), 'abcd');
        assert.equal(validateString(`(ab(c)d`), 'abcd');
        assert.equal(validateString(`))((`), '');
    });
});
