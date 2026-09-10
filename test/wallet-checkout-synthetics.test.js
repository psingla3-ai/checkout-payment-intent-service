import test from 'node:test';
import assert from 'node:assert/strict';
import {walletCheckoutScenarios, exceedsCheckoutFailureThreshold} from '../src/wallet-checkout-synthetics.js';

test('includes wallet scenarios and alerts on elevated failure rate', () => {
  assert.equal(walletCheckoutScenarios.filter(({paymentMethod}) => paymentMethod.includes('PAY')).length, 2);
  assert.equal(exceedsCheckoutFailureThreshold(3, 100), true);
});
