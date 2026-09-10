export function recordDependencyOutcome({checkoutId, paymentMethod, dependency, status, traceId}) {
  return {event: 'checkout.dependency.outcome', checkoutId, paymentMethod, dependency, status, traceId, failure: status >= 500 ? 1 : 0};
}
