import { convertZigzag } from './convert-zigzag';
import { describe, it, assert } from 'vitest';

describe('zigzag problem', () => {
    it('solution', () => {
        convertZigzag('PAYPALISHIRING', 3);
    });
});
