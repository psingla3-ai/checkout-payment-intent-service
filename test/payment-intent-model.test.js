import test from 'node:test';
import assert from 'node:assert/strict';
import {createPaymentIntentRequest, PaymentIntentState} from '../src/payment-intent-model.js';

test('creates a pending payment intent request for a validated merchant checkout', () => {
  const result = createPaymentIntentRequest({checkoutId: 'co_1', merchantId: 'm_1', amount: 2499, currency: 'USD', paymentMethod: {type: 'CARD'}});
  assert.equal(result.state, PaymentIntentState.PENDING);
});
