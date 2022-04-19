import { convertZigzag } from './index';
import { describe, it, assert } from 'vitest';

describe('zigzag problem', () => {
    it('solution', () => {
        convertZigzag('PAYPALISHIRING', 3);
    });
});
