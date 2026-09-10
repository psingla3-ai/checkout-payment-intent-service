import test from 'node:test';
import assert from 'node:assert/strict';
import {PaymentInstrumentClient} from '../src/payment-instrument-client.js';

test('maps enrichment dependency errors to an available checkout error', async () => {
  const client = new PaymentInstrumentClient(async () => { throw new Error('upstream unavailable'); });
  await assert.rejects(client.enrichForCheckout({checkoutId: 'co_2', merchantId: 'm_1', paymentMethod: {type: 'APPLE_PAY'}}), {message: 'PAYMENT_INSTRUMENT_UNAVAILABLE'});
});
