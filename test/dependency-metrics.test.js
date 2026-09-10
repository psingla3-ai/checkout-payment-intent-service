import test from 'node:test';
import assert from 'node:assert/strict';
import {recordDependencyOutcome} from '../src/dependency-metrics.js';

test('records dependency context and a failure signal', () => {
  assert.equal(recordDependencyOutcome({checkoutId: 'co_4', paymentMethod: 'APPLE_PAY', dependency: 'payment-instrument', status: 500, traceId: 'trace-1'}).failure, 1);
});
