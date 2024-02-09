import { expect, it, describe } from 'bun:test';
import { Vector, equal, dist } from "./index";

describe('types', () => {
    it('check types', () => {
        const v: Vector = [1, 2, 3];
        expect(Array.isArray(v)).toBe(true);
        expect(equal(v, [1, 2, 3])).toBe(true);
        expect(dist(v, [1, 2, 3])).toBe(0);
    });
});
