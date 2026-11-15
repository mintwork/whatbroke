import { expect, it } from 'vitest';
import { mask } from '../src/core/mask.js';

// Temporary: fails on purpose to test the published Action end to end. Never merged.
it('masks durations', () => {
  expect(mask('took 12ms')).toBe('took 12ms');
});
