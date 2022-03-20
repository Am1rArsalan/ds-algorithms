import { describe, it, assert } from 'vitest';
import { canFinishCourse } from './index';

describe('can finish courses problem (#4)', () => {
    it('best test case #4', () => {
        // FIXME:  why this test case is red
        assert.equal(
            canFinishCourse(6, [
                [1, 0],
                [2, 1],
                [2, 5],
                [0, 3],
                [4, 3],
                [3, 5],
                [4, 5],
            ]),
            false
        );
    });

    it('should be true', () => {
        assert.equal(
            canFinishCourse(4, [
                [1, 0],
                [2, 1],
                [0, 3],
            ]),
            true
        );
    });

    it('should be false ( there is a cycle ) ', () => {
        assert.equal(
            canFinishCourse(3, [
                [1, 0],
                [2, 1],
                [0, 2],
            ]),
            false
        );
    });
});
