import { assert, test } from 'vitest';
import {
    findMinimumWatingTime
} from './find-min-wating-time';

test('finding minimum wating time problem#1', () => {
    assert.equal(findMinimumWatingTime([3,2,1,2,6]), 17);
});

test('finding minimum wating time problem#2', () => {
    assert.equal(findMinimumWatingTime([100,1]), 1);
});

test('finding minimum wating time problem#3', () => {
    assert.equal(findMinimumWatingTime([100]), 0);
});
