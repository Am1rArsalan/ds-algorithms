import { assert, test } from 'vitest';
import {
    classPhotos 
} from './class-photos';

test('finding minimum wating time problem#1', () => {
    const res = classPhotos([5,8,1,3,4], [6,9,2,4,5]);
    assert.equal(res, true);
});

