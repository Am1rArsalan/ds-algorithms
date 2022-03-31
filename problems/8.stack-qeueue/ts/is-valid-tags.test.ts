import { isValidTags } from './index';
import { describe, assert, it } from 'vitest';

describe('is valid html tags problem', () => {
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
});
