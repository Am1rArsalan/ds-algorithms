import {
    solution,
    solution2,
    optimizedSolution,
    optimizedSolution2,
} from './find-longest-unique-substring';
import { describe, it, assert } from 'vitest';

describe('find length of longest substring without repeating characters', () => {
    it('solution', () => {
        assert.equal(solution('abccabb'), 3);
        assert.equal(solution('abcbdaac'), 4);
    });

    it('solution 2', () => {
        assert.equal(solution2('abccabb'), 3);
        assert.equal(solution2('abcbdaac'), 4);
    });

    it('optimized solution', () => {
        assert.equal(optimizedSolution('abccabb'), 3);
        assert.equal(optimizedSolution('abcbdaac'), 4);
    });

    it('optimized solution 2', () => {
        assert.equal(optimizedSolution2('abccabb'), 3);
        assert.equal(optimizedSolution2('abcbdaac'), 4);
    });
});
