import test from 'node:test';
import assert from 'node:assert/strict';
import {requireApprovedRiskDecision} from '../src/risk-decision-gate.js';

test('requires approval before payment intent creation', async () => {
  const decision = await requireApprovedRiskDecision({assess: async () => ({decision: 'APPROVE', riskScore: 14})}, {checkoutId: 'co_3'});
  assert.equal(decision.decision, 'APPROVE');
});
