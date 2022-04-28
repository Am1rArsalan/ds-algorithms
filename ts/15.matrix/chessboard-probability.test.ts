import { test, assert } from 'vitest';
import { calculateProbability } from './';
import { memoizedCalculateProbability } from './chessboard-probability';

test("1.calculate probability of knight's movement in chessboard", () => {
    assert.equal(calculateProbability(6, 2, 2, 2), 0.53125);
});

test("1.calculate probability of knight's movement in chessboard ( memoized )", () => {
    assert.equal(memoizedCalculateProbability(6, 2, 2, 2), 0.53125);
});

test("2.calculate probability of knight's movement in chessboard", () => {
    const start = performance.now();
    const result = calculateProbability(6, 3, 2, 2);
    const end = performance.now();
    console.info(`Execution Time: ${end - start}ms`);
    assert.equal(result, 0.359375);
    console.info('result', result);
});

test("2.calculate probability of knight's movement in chessboard, (memoized)", () => {
    const start = performance.now();
    const result = memoizedCalculateProbability(6, 3, 2, 2);
    const end = performance.now();
    console.info(`Execution Time: ${end - start}ms, optimized`);
    assert.equal(result, 0.359375);
    console.info('result', result);
});
