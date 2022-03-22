import { describe, it, assert } from 'vitest';
import { canFinishCourses, canFinishCourses2 } from './index';

describe('can finish courses problem (#4)', () => {
    describe('using topological sort', () => {
        it('best test case #4', () => {
            assert.equal(
                canFinishCourses2(6, [
                    [1, 0],
                    [2, 1],
                    [2, 5],
                    [0, 3],
                    [4, 3],
                    [3, 5],
                    [4, 5],
                ]),
                true
            );
        });

        it('should be true', () => {
            assert.equal(
                canFinishCourses2(4, [
                    [1, 0],
                    [2, 1],
                    [0, 3],
                ]),
                true
            );
        });

        it('should be false ( there is a cycle ) ', () => {
            assert.equal(
                canFinishCourses2(3, [
                    [1, 0],
                    [2, 1],
                    [0, 2],
                ]),
                false
            );
        });
    });

    describe('using nested loops', () => {
        it('best test case #4', () => {
            assert.equal(
                canFinishCourses(6, [
                    [1, 0],
                    [2, 1],
                    [2, 5],
                    [0, 3],
                    [4, 3],
                    [3, 5],
                    [4, 5],
                ]),
                true
            );
        });

        it('should be true', () => {
            assert.equal(
                canFinishCourses(4, [
                    [1, 0],
                    [2, 1],
                    [0, 3],
                ]),
                true
            );
        });

        it('should be false ( there is a cycle ) ', () => {
            assert.equal(
                canFinishCourses(3, [
                    [1, 0],
                    [2, 1],
                    [0, 2],
                ]),
                false
            );
        });
    });
});
