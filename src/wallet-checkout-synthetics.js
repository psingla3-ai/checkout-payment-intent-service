export const walletCheckoutScenarios = [
  {name: 'saved-card-payment-intent', paymentMethod: 'CARD', expectedStatus: 201},
  {name: 'apple-pay-payment-intent', paymentMethod: 'APPLE_PAY', expectedStatus: 201},
  {name: 'google-pay-payment-intent', paymentMethod: 'GOOGLE_PAY', expectedStatus: 201}
];

export function exceedsCheckoutFailureThreshold(failures, attempts, threshold = 0.02) {
  return attempts > 0 && failures / attempts > threshold;
}
