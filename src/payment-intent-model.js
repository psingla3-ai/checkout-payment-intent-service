export const PaymentIntentState = Object.freeze({PENDING: 'PENDING', CREATED: 'CREATED', REJECTED: 'REJECTED'});

export function createPaymentIntentRequest({checkoutId, merchantId, amount, currency, paymentMethod}) {
  if (!checkoutId || !merchantId || !paymentMethod || amount <= 0 || !currency) {
    throw new Error('INVALID_PAYMENT_INTENT_REQUEST');
  }
  return {checkoutId, merchantId, amount, currency, paymentMethod, state: PaymentIntentState.PENDING};
}

export function createPaymentIntent(request) {
  return {id: `pi_${request.checkoutId}`, ...request, state: PaymentIntentState.CREATED};
}
