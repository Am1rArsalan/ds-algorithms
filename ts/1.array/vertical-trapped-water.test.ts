import { solution, opSolution, opSolution2 } from './vertical-trapped-water';
import { describe, it, assert } from 'vitest';

describe('it the problem', () => {
    it('should pass the test', () => {
        assert.equal(solution([1, 2, 3, 4, 6, 8, 5]), 12);
        assert.equal(solution([1, 2, 3]), 2);
        assert.equal(solution([1, 2, 2]), 2);
        assert.equal(solution([1, 2]), 1);
        assert.equal(solution([]), 0);
        assert.equal(solution([1]), 0);
        assert.equal(solution([7, 1, 2, 3, 9]), 28);
    });
    it('should pass the test', () => {
        assert.equal(opSolution([1, 2, 3, 4, 6, 8, 5]), 12);
        assert.equal(opSolution([1, 2, 3]), 2);
        assert.equal(opSolution([1, 2, 2]), 2);
        assert.equal(opSolution([1, 2]), 1);
        assert.equal(opSolution([]), 0);
        assert.equal(opSolution([1]), 0);
        assert.equal(opSolution([7, 1, 2, 3, 9]), 28);
    });

    it('should pass the test', () => {
        assert.equal(opSolution2([1, 2, 3, 4, 6, 8, 5]), 12);
        assert.equal(opSolution2([1, 2, 3]), 2);
        assert.equal(opSolution2([1, 2, 2]), 2);
        assert.equal(opSolution2([1, 2]), 1);
        assert.equal(opSolution2([]), 0);
        assert.equal(opSolution2([1]), 0);
        assert.equal(opSolution2([7, 1, 2, 3, 9]), 28);
    });
});
